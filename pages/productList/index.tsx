import React, { useMemo } from "react";
import { Grid, Container } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";

import { HeroText } from "@/components/organisms/Hero/Hero.component";
import { Filter } from "@/components/organisms/Filter/Filter.component";
import { Listing } from "@/components/organisms/Listing/Listing.component";
import { CardSkeleton } from "@/components/molecules/CardSkeleton/CardSkeleton.component";
import { TopFilter } from "@/components/molecules/TopFilter/TopFilter.component";

import { getProducts } from "@/utils/dataFetchers";
import { selectFilter } from "@/store/filter/filterSlice";

import { Product } from "@/types";

// TODO: Draw a diagram of the data flow in this component

const ProductList = () => {
	const { isError, data, error, isLoading } = useQuery({
		queryKey: ["products"],
		queryFn: getProducts,
	});

	const filterState = useSelector(selectFilter);

	const uniqueBrands: Set<string> = useMemo(() => {
		const brands = data?.map((product: Product) => product.brand);
		return new Set(brands);
	}, [data]);

	const uniqueSizes: Set<string> = useMemo(() => {
		const sizes = data?.map((product: Product) => product.sizes).flat();
		return new Set(sizes);
	}, [data]);

	const filteredAndSortedProducts = useMemo(() => {
		const filtered = data?.filter((product: Product) => {
			const brandMatches =
				filterState.brands.length === 0 ||
				filterState.brands.includes(product.brand);

			const numericSizeMatches =
				filterState.sizesNumeric.length === 0 ||
				product.sizes.some((size) => filterState.sizesNumeric.includes(size));

			const letterSizeMatches =
				filterState.sizesLetter.length === 0 ||
				product.sizes.some((size) => filterState.sizesLetter.includes(size));

			const searchTermMatches =
				!filterState.searchTerm ||
				product.brand
					.toLowerCase()
					.includes(filterState.searchTerm.toLowerCase()) ||
				(product.brand &&
					product.description
						.toLowerCase()
						.includes(filterState.searchTerm.toLowerCase()));

			return (
				brandMatches &&
				numericSizeMatches &&
				letterSizeMatches &&
				searchTermMatches
			);
		});

		const getPrice = (product: Product) => product.priceR ?? product.priceO;

		if (filterState.sortByPrice === "asc") {
			return filtered.sort(
				(a: Product, b: Product) => getPrice(a) - getPrice(b)
			);
		} else if (filterState.sortByPrice === "desc") {
			return filtered.sort(
				(a: Product, b: Product) => getPrice(b) - getPrice(a)
			);
		}

		return filtered;
	}, [
		data,
		filterState.brands,
		filterState.sizesLetter,
		filterState.sizesNumeric,
		filterState.searchTerm,
		filterState.sortByPrice,
	]);

	if (isError) return <div>Error: {error.message}</div>;

	return (
		<Container fluid>
			<HeroText />
			<Grid pt="xl">
				<Grid.Col span={{ base: 12, sm: 3, md: 3, lg: 2, xl: 2 }} pb="xl">
					<Filter brands={uniqueBrands} sizes={uniqueSizes} />
				</Grid.Col>
				<Grid.Col span={{ base: 12, sm: 9, md: 9, lg: 10, xl: 10 }} pb="xl">
					<TopFilter />
					<Grid>
						{isLoading && (
							<>
								{Array.from({ length: 12 }, (_, i) => i + 1).map(
									(index: number) => (
										<CardSkeleton key={index} />
									)
								)}
							</>
						)}
						{!isLoading && filteredAndSortedProducts && (
							<Listing products={filteredAndSortedProducts} />
						)}
					</Grid>
				</Grid.Col>
			</Grid>
		</Container>
	);
};

export default ProductList;

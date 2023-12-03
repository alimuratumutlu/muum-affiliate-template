import React, { useMemo } from "react";
import { Grid, Container } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";

import { HeroText } from "@/components/organisms/Hero/Hero.component";
import { Filter } from "@/components/organisms/Filter/Filter.component";
import Listing from "@/components/organisms/Listing/Listing.component";
import { CardSkeleton } from "@/components/molecules/CardSkeleton/CardSkeleton.component";

import { getProducts } from "@/utils/dataFetchers";

import { Product } from "@/types";
import { TopFilter } from "@/components/molecules/TopFilter/TopFilter.component";

const ProductList = () => {
	const { isError, data, error, isLoading } = useQuery({
		queryKey: ["products"],
		queryFn: getProducts,
	});

	const uniqueBrands: Set<string> = useMemo(() => {
		const brands = data?.map((product: Product) => product.brand);
		return new Set(brands);
	}, [data]);

	const uniqueSizes: Set<string> = useMemo(() => {
		const sizes = data?.map((product: Product) => product.sizes).flat();
		return new Set(sizes);
	}, [data]);

	if (isError) return <div>Error: {error.message}</div>;

	return (
		<Container fluid>
			<HeroText />
			<Grid pt="xl">
				<Grid.Col span={{ base: 12, sm: 4, md: 3, lg: 3, xl: 3 }} pb="xl">
					<Filter brands={uniqueBrands} sizes={uniqueSizes} />
				</Grid.Col>
				<Grid.Col span={{ base: 12, sm: 8, md: 9, lg: 9, xl: 9 }} pb="xl">
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
						{!isLoading && data && (
							<Listing products={data} isLoading={isLoading} />
						)}
					</Grid>
				</Grid.Col>
			</Grid>
		</Container>
	);
};

export default ProductList;

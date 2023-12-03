import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";

import { getProducts } from "@/utils/dataFetchers";

import { selectFilter } from "@/store/filter/filterSlice";

import { Product } from "@/types";

const useFilteredData = () => {
	const { data, isError, error, isLoading } = useQuery({
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

			const discountMatches =
				!filterState.showOnlyDiscounted || product.priceR < product.priceO;

			return (
				brandMatches &&
				numericSizeMatches &&
				letterSizeMatches &&
				searchTermMatches &&
				discountMatches
			);
		});

		const getPrice = (product: Product) => product.priceR ?? product.priceO;

		if (filterState.sortByPrice === "asc") {
			return filtered?.sort(
				(a: Product, b: Product) => getPrice(a) - getPrice(b)
			);
		} else if (filterState.sortByPrice === "desc") {
			return filtered?.sort(
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
		filterState.showOnlyDiscounted,
	]);

	return {
		data,
		isError,
		error,
		isLoading,
		filteredAndSortedProducts,
		uniqueBrands,
		uniqueSizes,
	};
};

export default useFilteredData;

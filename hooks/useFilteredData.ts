import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";

import { getProducts } from "@/utils/getData";
import { getPrice } from "@/utils/getPrice";

import { selectFilter } from "@/store/filter/filterSlice";

import { Product } from "@/types";

const useFilteredData = () => {
	// We use here react-query to fetch the data from the API	and cache it.
	// That gives us the ability to use the data in multiple components
	// without having to fetch it again and again.

	// Normally, when you call a custom hook from multiple places, it creates a new instance each time.
	// But because the useQuery hook is a wrapper around the useQueryClient hook,
	// it will return the same instance of the query cache across all of our components.

	// That also gives us the ability to prevent prop drilling and use the data in any component we want.

	const { data, isError, error, isLoading } = useQuery({
		queryKey: ["products"],
		queryFn: getProducts,
	});

	const filterState = useSelector(selectFilter);

	const uniqueBrands: string[] = useMemo(() => {
		const brands = data?.map((product: Product) => product.brand);
		return Array.from(new Set(brands));
	}, [data]);

	const uniqueSizes: string[] = useMemo(() => {
		const sizes = data?.map((product: Product) => product.sizes).flat();
		return Array.from(new Set(sizes));
	}, [data]);

	const filteredAndSortedProducts = useMemo(() => {
		// Filter the data based on the filter state.
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
				!filterState.showOnlyDiscounted ||
				(product.priceR !== undefined && product.priceR < product.priceO);

			return (
				brandMatches &&
				numericSizeMatches &&
				letterSizeMatches &&
				searchTermMatches &&
				discountMatches
			);
		});

		// We calculated the filtered data. Now we will sort it based on the sort state.
		// The products have 2 prices: original and reduced. We use getPrice to get the price to be compared.

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

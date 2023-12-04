import { useMemo } from "react";
import { Grid } from "@mantine/core";

import { ProductCard, CardSkeleton } from "@/components";

import useFilteredData from "@/hooks/useFilteredData";

import { Product } from "@/types";

export default function Showcase() {
	const { isLoading, filteredAndSortedProducts } = useFilteredData();

	const skeletonLoader = useMemo(() => {
		const arr = Array.from({ length: 12 }, (_, i) => i + 1);
		return arr.map((index: number) => <CardSkeleton key={index} />);
	}, []);

	if (isLoading) return <Grid>{skeletonLoader}</Grid>;

	return (
		<Grid>
			{filteredAndSortedProducts?.map((product: Product, index: number) => (
				<Grid.Col
					key={product.id}
					span={{ base: 12, xs: 6, sm: 6, md: 4, lg: 3, xl: 3 }}
					pb="md"
				>
					<ProductCard product={product} />
				</Grid.Col>
			))}
		</Grid>
	);
}

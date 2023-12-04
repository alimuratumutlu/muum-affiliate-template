import React from "react";
import { Grid, Container, Text } from "@mantine/core";

import { HeroText } from "@/components/organisms/Hero/Hero.component";
import { Filter } from "@/components/organisms/Filter/Filter.component";
import { Showcase } from "@/components/organisms/Showcase/Showcase.component";
import { CardSkeleton } from "@/components/molecules/CardSkeleton/CardSkeleton.component";
import { TopFilter } from "@/components/molecules/TopFilter/TopFilter.component";

import useFilteredData from "@/hooks/useFilteredData";

// TODO: Draw a diagram of the data flow in this component

const ProductList = () => {
	const {
		isError,
		error,
		isLoading,
		filteredAndSortedProducts,
		uniqueBrands,
		uniqueSizes,
	} = useFilteredData();

	if (isError) return <div>Error: {error?.message}</div>;

	return (
		<Container fluid mt={100}>
			<Grid pt="xl">
				<Grid.Col span={{ base: 12, sm: 3, md: 3, lg: 2, xl: 2 }} pb="xl">
					<Filter brands={uniqueBrands} sizes={uniqueSizes} />
				</Grid.Col>
				<Grid.Col span={{ base: 12, sm: 9, md: 9, lg: 10, xl: 10 }} pb="xl">
					<Text fw={600}>
						{!isLoading && filteredAndSortedProducts?.length} results listed
					</Text>
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
							<Showcase products={filteredAndSortedProducts} />
						)}
					</Grid>
				</Grid.Col>
			</Grid>
		</Container>
	);
};

export default ProductList;

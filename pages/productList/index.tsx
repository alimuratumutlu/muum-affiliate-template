import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Center, Grid, Text, Paper, Container } from "@mantine/core";

import { HeroText } from "@/components/organisms/Hero/Hero.component";
import { ProductCard } from "@/components/molecules/ProductCard/ProductCard.component";

interface Product {
	id: string;
	brand: string;
	description: string;
	images: string[];
	priceO: number;
	priceR: number;
	sizes: string[];
}

const fetchProducts = async () => {
	const response = await fetch("api/products");
	if (!response.ok) {
		throw new Error("Network response was not ok");
	}
	return response.json();
};

const ProductList = () => {
	const { isPending, isError, data, error, isLoading } = useQuery({
		queryKey: ["products"],
		queryFn: fetchProducts,
	});

	if (isPending) return <div>Loading</div>;
	if (isError) return <div>{error.message}</div>;
	if (isLoading) return <Center>Loading</Center>;

	return (
		<Container fluid>
			<HeroText />
			<Grid pt="xl">
				<Grid.Col span={{ base: 12, sm: 4, md: 3, lg: 3, xl: 3 }} pb="xl">
					<Paper shadow="lg" p="xl">
						<Text>
							Use it to create cards, dropdowns, modals and other components
							that require background with shadow
						</Text>
					</Paper>
				</Grid.Col>
				<Grid.Col span={{ base: 12, sm: 8, md: 9, lg: 9, xl: 9 }} pb="xl">
					<Grid>
						{data.map((product: Product, index: number) => (
							<Grid.Col
								key={product.id}
								span={{ base: 12, sm: 6, md: 4, lg: 4, xl: 3 }}
								pb="md"
							>
								<ProductCard product={product} />
							</Grid.Col>
						))}
					</Grid>
				</Grid.Col>
			</Grid>
		</Container>
	);
};

export default ProductList;

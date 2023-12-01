import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Center, Grid, Text, Paper, Container } from "@mantine/core";

import { HeroText } from "@/components/Hero/Hero.component";

interface Product {
	id: string | number;
	brand: string;
	name: string;
	description: string;
	images: string[];
	priceO: number;
	priceR: number;
	size: string[];
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
				<Grid.Col span={{ base: 12, md: 6, lg: 3, xl: 3 }} pb="xl">
					<Paper shadow="lg" p="xl">
						<Text>
							Use it to create cards, dropdowns, modals and other components
							that require background with shadow
						</Text>
					</Paper>
				</Grid.Col>
				<Grid.Col span={{ base: 12, md: 6, lg: 9, xl: 9 }} pb="xl">
					<Paper shadow="lg" p="xl">
						{" "}
						<ul>
							{data.map((product: Product, index: number) => (
								<li key={product.id}>
									<div>
										<span>{index + 1}. </span>
										<a href="#">{product.brand}</a>
									</div>
								</li>
							))}
						</ul>
					</Paper>
				</Grid.Col>
			</Grid>
		</Container>
	);
};

export default ProductList;

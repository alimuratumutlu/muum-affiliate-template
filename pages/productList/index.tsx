import Head from "next/head";
import { Grid, Container } from "@mantine/core";

import { Filter, Showcase, FilterPrice, ResultInfo } from "@/components";

import useFilteredData from "@/hooks/useFilteredData";

const ProductList = () => {
	const { isError, error } = useFilteredData();

	if (isError) return <div>Error: {error?.message}</div>;

	return (
		<>
			<Head>
				<title>Product List - Muum Store</title>
				<meta
					name="description"
					content="Browse our wide range of products. Find what you need at Muum Store."
				/>
				<meta name="robots" content="index, follow" />
			</Head>
			<Container fluid mt={100}>
				<Grid pt="xl">
					<Grid.Col span={{ base: 12, sm: 3, md: 3, lg: 2, xl: 2 }} pb="xl">
						<Filter />
					</Grid.Col>
					<Grid.Col span={{ base: 12, sm: 9, md: 9, lg: 10, xl: 10 }} pb="xl">
						<ResultInfo />
						<FilterPrice />
						<Showcase />
					</Grid.Col>
				</Grid>
			</Container>
		</>
	);
};

export default ProductList;

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Center } from "@mantine/core";

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
		<section>
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
		</section>
	);
};

export default ProductList;

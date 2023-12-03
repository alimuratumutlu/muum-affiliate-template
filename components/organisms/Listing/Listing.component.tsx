import { Grid } from "@mantine/core";

import { ProductCard } from "@/components/molecules/ProductCard/ProductCard.component";

import { Product } from "@/types";

interface ListingProps {
	products: Product[];
}

export function Listing({ products }: ListingProps) {
	return (
		<>
			{products?.map((product: Product, index: number) => (
				<Grid.Col
					key={product.id}
					span={{ base: 12, xs: 6, sm: 6, md: 4, lg: 3, xl: 3 }}
					pb="md"
				>
					<ProductCard product={product} />
				</Grid.Col>
			))}
		</>
	);
}

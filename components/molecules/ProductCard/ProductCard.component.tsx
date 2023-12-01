import { Card, Image, Text, Group, Center, Box } from "@mantine/core";

import PriceText from "@/components/atoms/Texts/PriceText.component";
import CartButton from "@/components/atoms/Buttons/CartButton.component";

import classes from "./ProductCard.module.css";

interface ProductCardProps {
	product: {
		id: string | number;
		brand: string;
		description: string;
		images: string[];
		priceO: number;
		priceR: number;
		sizes: string[];
	};
}

export function ProductCard({ product }: ProductCardProps) {
	const sizeList = product.sizes?.map((size) => (
		<Center key={size}>
			<Text size="xs">{size}</Text>
		</Center>
	));

	return (
		<Card withBorder radius="md" className={classes.card}>
			<Card.Section className={classes.imageSection}>
				<Image src={product.images[0]} alt="Tesla Model S" />
			</Card.Section>

			<Group justify="space-between" mt="md">
				<div>
					<Box w={300}>
						<Text truncate="end" fw={500} pr="xl">
							{product.description}
						</Text>
					</Box>

					<Text fz="xs" c="dimmed">
						{product.brand}
					</Text>
				</div>
			</Group>

			<Card.Section className={classes.section} mt="md">
				<Text fz="sm" c="dimmed" className={classes.label}>
					Available Sizes
				</Text>

				<Group gap={8} mb={-8}>
					{sizeList}
				</Group>
			</Card.Section>

			<Card.Section className={classes.section}>
				<Group gap={30}>
					<PriceText priceO={product.priceO} priceR={product.priceR} />
					<CartButton />
				</Group>
			</Card.Section>
		</Card>
	);
}

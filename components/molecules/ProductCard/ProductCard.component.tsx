import Image from "next/image";

import { Card, Text, Group, Box, Select } from "@mantine/core";

import PriceText from "@/components/atoms/Texts/PriceText.component";
import CartButton from "@/components/atoms/Buttons/CartButton.component";
import DiscountIcon from "@/components/atoms/Icons/DiscountIcon.component";

import classes from "./ProductCard.module.css";
import { Product } from "@/types";

interface ProductCardProps {
	product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
	return (
		<Card withBorder radius="md" className={classes.card} shadow="lg">
			<Card.Section className={classes.imageSection}>
				<Image
					src={product.images[0]}
					alt="Tesla Model S"
					width={300}
					height={400}
				/>
			</Card.Section>

			<DiscountIcon priceO={product.priceO} priceR={product.priceR} />
			<Group justify="space-between" mt="md">
				<div>
					<Box w={240}>
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

				<Select placeholder="Pick your size" data={product.sizes} />
			</Card.Section>

			<Card.Section className={classes.section}>
				<Group gap={10}>
					<PriceText priceO={product.priceO} priceR={product.priceR} />
					<CartButton id={product.id} />
				</Group>
			</Card.Section>
		</Card>
	);
}

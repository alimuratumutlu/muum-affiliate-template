import {
	Card,
	Image,
	Text,
	Group,
	Center,
	Box,
	Flex,
	Select,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";

import PriceText from "@/components/atoms/Texts/PriceText.component";
import CartButton from "@/components/atoms/Buttons/CartButton.component";

import classes from "./ProductCard.module.css";
import DiscountIcon from "@/components/atoms/Icons/DiscountIcon.component";

interface ProductCardProps {
	product: {
		id: string;
		brand: string;
		description: string;
		images: string[];
		priceO: number;
		priceR: number;
		sizes: string[];
	};
}

export function ProductCard({ product }: ProductCardProps) {
	return (
		<Card withBorder radius="md" className={classes.card} shadow="lg">
			<Card.Section className={classes.imageSection}>
				<Image src={product.images[0]} alt="Tesla Model S" />
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

import { useMemo } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

import { Card, Text, Group, Box, Select } from "@mantine/core";
import { notifications } from "@mantine/notifications";

import PriceText from "@/components/atoms/Texts/PriceText.component";
import CartButton from "@/components/atoms/Buttons/CartButton.component";
import DiscountIcon from "@/components/atoms/Icons/DiscountIcon.component";

import { addToCart, selectCart } from "@/store/cart/cartSlice";

import classes from "./ProductCard.module.css";
import { Product } from "@/types";

interface ProductCardProps {
	product: Product;
}

// TODO: Add a loader while the item is being added to the cart
// TODO: Selected size will be on the cart
// TODO: Thumbnail will be on the cart

export function ProductCard({ product }: ProductCardProps) {
	const dispatch = useDispatch();
	const cart = useSelector(selectCart);
	const isItemInCart = cart.items[product.id] !== undefined;

	const [buttonStartColor, buttonEndColor] = useMemo(() => {
		return isItemInCart ? ["green", "gray"] : ["blue", "pink"];
	}, [isItemInCart]);

	const priceToDisplay = useMemo(() => {
		return product.priceR ? product.priceR : product.priceO;
	}, [product.priceR, product.priceO]);

	const handleAddToCart = (id: string, name: string, price: number) => {
		const productToAdd = {
			id: id,
			name: name,
			price: price,
		};

		dispatch(addToCart(productToAdd));
		notifications.show({
			title: product.description,
			message: "Successfully added to cart!",
		});
	};

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
					<CartButton
						title={isItemInCart ? "In Cart" : "Add"}
						startColor={buttonStartColor}
						endColor={buttonEndColor}
						onClick={() =>
							handleAddToCart(product.id, product.description, priceToDisplay)
						}
					/>
				</Group>
			</Card.Section>
		</Card>
	);
}

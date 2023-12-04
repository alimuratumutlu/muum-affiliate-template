import { useMemo, useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

import { Card, Text, Group, Box, Loader, Select } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { IconX, IconCheck } from "@tabler/icons-react";

import { PriceText, AddtoCartButton, DiscountIcon } from "@/components";

import { addToCart, selectCart } from "@/store/cart/cartSlice";

import { Product } from "@/types";

import classes from "./ProductCard.module.css";

interface ProductCardProps {
	product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
	const dispatch = useDispatch();
	const cart = useSelector(selectCart);

	const [addingToCart, setAddingToCart] = useState(false);
	const [selectedSize, setSelectedSize] = useState<string | null>(null);

	const isItemInCart = cart.items[product.id] !== undefined;

	const [buttonStartColor, buttonEndColor] = useMemo(() => {
		return isItemInCart ? ["green", "gray"] : ["blue", "pink"];
	}, [isItemInCart]);

	const priceToDisplay = useMemo(() => {
		return product.priceR ? product.priceR : product.priceO;
	}, [product.priceR, product.priceO]);

	const handleAddToCart = async (
		id: string,
		name: string,
		price: number,
		size: string | null,
		thumbnail: string
	) => {
		if (selectedSize === null) {
			notifications.show({
				color: "red",
				title: "Please select a size!",
				message: "You must select a size before adding to cart!",
			});
			return;
		}

		setAddingToCart(true);

		const productToAdd = {
			id: id,
			name: name,
			price: price,
			size: size,
			thumbnail: thumbnail,
		};

		console.log(productToAdd);

		await dispatch(addToCart(productToAdd));
		setAddingToCart(false);

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
					alt={product.description}
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

				<Select
					placeholder="Pick your size"
					data={product.sizes}
					onChange={setSelectedSize}
				/>
			</Card.Section>

			<Card.Section className={classes.section}>
				<Group gap={10}>
					<PriceText priceO={product.priceO} priceR={product.priceR} />
					<AddtoCartButton
						title={
							isItemInCart ? (
								"In Cart"
							) : addingToCart ? (
								<Loader size="xs" />
							) : (
								"Add"
							)
						}
						startColor={buttonStartColor}
						endColor={buttonEndColor}
						onClick={() =>
							handleAddToCart(
								product.id,
								product.description,
								priceToDisplay,
								selectedSize,
								product.images[0]
							)
						}
					/>
				</Group>
			</Card.Section>
		</Card>
	);
}

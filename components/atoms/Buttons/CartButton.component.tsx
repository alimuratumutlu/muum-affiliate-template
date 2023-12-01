import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mantine/core";
import {
	IconShoppingCartCheck,
	IconShoppingCartPlus,
} from "@tabler/icons-react";
import { addToCart, selectCart } from "@/store/cart/cartSlice";

import classes from "@/styles/Buttons.module.css";

interface CartButtonProps {
	id: string;
}

export default function CartButton({ id }: CartButtonProps) {
	const dispatch = useDispatch();
	const cart = useSelector(selectCart);
	const isItemInCart = cart.items[id] !== undefined;

	// We use useMemo to avoid re-rendering the button when the item is already in the cart.
	// This is because the button's gradient color is dependent on whether the item is in the cart or not.

	const [buttonStartColor, buttonEndColor] = useMemo(() => {
		return isItemInCart ? ["green", "gray"] : ["blue", "pink"];
	}, [isItemInCart]);
	const handleAddToCart = (id: string) => {
		dispatch(addToCart(id));
	};

	return (
		<Button
			radius="md"
			className={classes.fullSizeButton}
			variant="gradient"
			gradient={{ from: buttonStartColor, to: buttonEndColor, deg: 236 }}
			rightSection={
				isItemInCart ? (
					<IconShoppingCartCheck size="1.2rem" />
				) : (
					<IconShoppingCartPlus size="1.2rem" />
				)
			}
			onClick={() => handleAddToCart(id)}
		>
			{isItemInCart ? "In Cart" : "Add to Cart"}
		</Button>
	);
}

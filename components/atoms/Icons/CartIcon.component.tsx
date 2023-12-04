import { useSelector, useDispatch } from "react-redux";
import { IconShoppingCart, IconTrash } from "@tabler/icons-react";
import {
	Popover,
	Text,
	Button,
	Indicator,
	Divider,
	Stack,
	ActionIcon,
	Flex,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import { selectCart, removeFromCart } from "@/store/cart/cartSlice";

import cx from "clsx";

import classes from "@/styles/Icons.module.css";
import React, { useCallback, useMemo } from "react";

export default function CartIcon() {
	const dispatch = useDispatch();

	const [opened, { close, open }] = useDisclosure(false);

	// Accessing the cart state
	const cart = useSelector(selectCart);

	// Function to handle item removal
	const handleRemoveFromCart = useCallback(
		(id: string) => {
			dispatch(removeFromCart(id));
		},
		[dispatch]
	);

	// Calculating the total item count and total price

	const { cartListContent, itemCount, totalPrice } = useMemo(() => {
		let itemCount = 0;
		let totalPrice = 0;

		const cartItems = Object.values(cart.items).map((item) => {
			itemCount += item.count;
			totalPrice += item.count * item.price;
			return item; // Return the item for further use
		});

		const itemContent = cartItems.map((item) => (
			<React.Fragment key={item.id}>
				<Flex justify="space-between">
					<Text size="sm">{item.name}</Text>
					<ActionIcon onClick={() => handleRemoveFromCart(item.id)} size="xs">
						<IconTrash size={32} />
					</ActionIcon>
				</Flex>
				<Text size="xs" c="gray.6">
					{item.count} x ${item.price.toFixed(2)}
				</Text>
				<Divider />
			</React.Fragment>
		));

		return {
			cartListContent: itemContent,
			itemCount,
			totalPrice,
		};
	}, [cart, handleRemoveFromCart]);

	const toggleCartList = () => {
		opened ? close() : open();
	};

	return (
		<Popover width={400} position="bottom-end" shadow="lg" opened={opened}>
			<Indicator
				label={itemCount}
				color="red"
				size={16}
				disabled={itemCount <= 0}
			>
				<Popover.Target>
					<Button
						variant="default"
						size="md"
						p="xs"
						aria-label="Cart Icon"
						onClick={toggleCartList}
					>
						<IconShoppingCart
							className={cx(classes.icon, classes.light)}
							size={16}
						/>
						<IconShoppingCart
							className={cx(classes.icon, classes.dark)}
							size={16}
						/>
					</Button>
				</Popover.Target>
				<Popover.Dropdown>
					{itemCount > 0 ? (
						<Stack gap="xs">
							{cartListContent}
							<Text size="sm" fw={500}>
								Total Price: €{totalPrice.toFixed(2)}
							</Text>
						</Stack>
					) : (
						<Text size="xs">Your cart is empty. Start shopping!</Text>
					)}
				</Popover.Dropdown>
			</Indicator>
		</Popover>
	);
}

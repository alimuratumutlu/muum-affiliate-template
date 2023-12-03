import { useSelector, useDispatch } from "react-redux";
import { IconShoppingCartBolt, IconTrash } from "@tabler/icons-react";
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

export default function CartIcon() {
	const dispatch = useDispatch();

	const [opened, { close, open }] = useDisclosure(false);

	// Accessing the cart state
	const cart = useSelector(selectCart);

	// Function to handle item removal
	const handleRemoveFromCart = (id: string) => {
		dispatch(removeFromCart(id));
	};

	// Calculating the total item count and total price
	let itemCount = 0;
	let totalPrice = 0;
	const cartItems = Object.values(cart.items).map((item) => {
		itemCount += item.count;
		totalPrice += item.count * item.price;
		return item; // Return the item for further use
	});

	const toggleCartList = () => {
		opened ? close() : open();
	};

	return (
		<Popover
			width={400}
			position="bottom"
			withArrow
			shadow="md"
			opened={opened}
		>
			<Indicator
				label={itemCount}
				color="red"
				size={16}
				disabled={itemCount <= 0}
			>
				<Popover.Target>
					<Button
						variant="default"
						size="sm"
						p="xs"
						aria-label="Cart Icon"
						onClick={toggleCartList}
					>
						<IconShoppingCartBolt className={cx(classes.icon, classes.light)} />
						<IconShoppingCartBolt className={cx(classes.icon, classes.dark)} />
					</Button>
				</Popover.Target>
				<Popover.Dropdown>
					{itemCount > 0 ? (
						<Stack gap="xs">
							{cartItems.map((item) => (
								<Flex key={item.id} justify="space-between">
									<Text size="sm">
										{item.name} - {item.count} x ${item.price.toFixed(2)}
									</Text>
									<ActionIcon
										onClick={() => handleRemoveFromCart(item.id)}
										size="xs"
									>
										<IconTrash size={16} />
									</ActionIcon>
								</Flex>
							))}
							<Divider />
							<Text size="sm" fw={500}>
								Total Price: ${totalPrice.toFixed(2)}
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

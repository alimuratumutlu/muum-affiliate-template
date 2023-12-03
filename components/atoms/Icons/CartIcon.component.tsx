import { useSelector } from "react-redux";
import { IconShoppingCartBolt } from "@tabler/icons-react";
import {
	Popover,
	Text,
	Button,
	Indicator,
	Divider,
	Stack,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import { selectCart } from "@/store/cart/cartSlice";

import cx from "clsx";

import classes from "@/styles/Icons.module.css";

export default function CartIcon() {
	const [opened, { close, open }] = useDisclosure(false);

	// Accessing the cart state
	const cart = useSelector(selectCart);

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
								<div key={item.id}>
									<Text size="sm">
										{item.name} - {item.count} x ${item.price.toFixed(2)}
									</Text>
								</div>
							))}
							<Divider />
							<Text size="sm" fw={500}>
								Total Price: ${totalPrice.toFixed(2)}
							</Text>
						</Stack>
					) : (
						<Text size="xs">Cart is empty</Text>
					)}
				</Popover.Dropdown>
			</Indicator>
		</Popover>
	);
}

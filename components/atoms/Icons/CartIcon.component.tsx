import { useSelector } from "react-redux";
import { selectCart } from "@/store/cart/cartSlice";

import { ActionIcon, Badge } from "@mantine/core";
import { IconShoppingCartBolt } from "@tabler/icons-react";

import cx from "clsx";

import classes from "@/styles/Icons.module.css";

export default function CartIcon() {
	// Accessing the cart state
	const cart = useSelector(selectCart);

	// Calculating the total item count
	const itemCount = Object.values(cart.items).reduce(
		(total, currentCount) => total + currentCount,
		0
	);

	const handleIconClick = () => {
		console.log("Icon clicked");
	};

	return (
		<>
			<ActionIcon
				onClick={handleIconClick}
				variant="default"
				size="lg"
				p="xs"
				aria-label="Cart Icon"
			>
				{
					// Show the item count only if there are items in the cart
					itemCount > 0 && (
						<Badge
							variant="filled"
							color="red"
							size="sm"
							className={classes.badge}
						/>
					)
				}
				<IconShoppingCartBolt className={cx(classes.icon, classes.light)} />
				<IconShoppingCartBolt className={cx(classes.icon, classes.dark)} />
			</ActionIcon>
		</>
	);
}

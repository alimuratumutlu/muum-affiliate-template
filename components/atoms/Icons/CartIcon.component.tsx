import { ActionIcon } from "@mantine/core";
import { IconShoppingCartBolt } from "@tabler/icons-react";

import cx from "clsx";

import classes from "@/styles/Icons.module.css";

export default function CartIcon() {
	const handleIconClick = () => {
		console.log("Icon clicked");
	};

	return (
		<ActionIcon
			onClick={handleIconClick}
			variant="default"
			size="lg"
			p="xs"
			aria-label="Cart Icon"
		>
			<IconShoppingCartBolt
				className={cx(classes.icon, classes.light)}
				stroke={2.5}
			/>
			<IconShoppingCartBolt
				className={cx(classes.icon, classes.dark)}
				stroke={2.5}
			/>
		</ActionIcon>
	);
}

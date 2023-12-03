import { Button } from "@mantine/core";

import { IconShoppingCart } from "@tabler/icons-react";

import classes from "@/styles/Buttons.module.css";

interface CartButtonProps {
	title: string;
	startColor: string;
	endColor: string;
	onClick: () => void;
}

export default function CartButton({
	title,
	startColor,
	endColor,
	onClick,
}: CartButtonProps) {
	// We use useMemo to avoid re-rendering the button when the item is already in the cart.
	// This is because the button's gradient color is dependent on whether the item is in the cart or not.

	return (
		<Button
			radius="md"
			className={classes.fullSizeButton}
			variant="gradient"
			gradient={{ from: startColor, to: endColor, deg: 236 }}
			rightSection={<IconShoppingCart size="1.2rem" />}
			onClick={onClick}
		>
			{title}
		</Button>
	);
}

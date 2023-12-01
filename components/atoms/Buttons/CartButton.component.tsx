import React from "react";

import { Button } from "@mantine/core";
import { IconShoppingCartCheck } from "@tabler/icons-react";

import { addToCart } from "@/store/cart/cartSlice";

interface CartButtonProps {
	id: string;
}

export default function CartButton({ id }: CartButtonProps) {
	const handleAddToCart = (id: string) => {
		addToCart(id);
	};

	return (
		<Button
			radius="md"
			style={{ flex: 1 }}
			variant="gradient"
			gradient={{ from: "blue", to: "pink", deg: 236 }}
			rightSection={<IconShoppingCartCheck size="0.9rem" />}
			onClick={() => handleAddToCart(id)}
		>
			Add to Cart
		</Button>
	);
}

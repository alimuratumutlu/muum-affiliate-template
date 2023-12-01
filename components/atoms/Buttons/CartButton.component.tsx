import React from "react";

import { Button } from "@mantine/core";
import { IconShoppingCartCheck } from "@tabler/icons-react";

export default function CartButton() {
	return (
		<Button
			radius="md"
			style={{ flex: 1 }}
			variant="gradient"
			gradient={{ from: "blue", to: "pink", deg: 236 }}
			rightSection={<IconShoppingCartCheck size="0.9rem" />}
		>
			Add to Cart
		</Button>
	);
}

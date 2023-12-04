import React from "react";

import { Text } from "@mantine/core";

interface PriceTextProps {
	priceO: number;
	priceR?: number;
}

export default function PriceText({ priceO, priceR }: PriceTextProps) {
	// We handle some edge cases here. For example, if the original price is the same as the reduced price, we will just return the original price. If the reduced price is not a number, undefined or null, we will just return the original price. If the original price is less than the reduced price, maybe by mistake, we will just return the original price.

	if (priceO === priceR || typeof priceR !== "number" || priceO < priceR) {
		return (
			<Text fz="xl" fw={700} style={{ lineHeight: 1 }}>
				{"€"}
				{priceO}
			</Text>
		);
	}

	// Now, we are returning the reduced price with the original price crossed out. This is just a simple way to show the original price and the reduced price, but we can make it more complex if we want to.

	return (
		<div>
			<Text fz="xl" fw={700} style={{ lineHeight: 1 }} c="red">
				{"€"}
				{priceR}
			</Text>
			<Text
				td="line-through"
				fz="sm"
				c="dimmed"
				fw={500}
				style={{ lineHeight: 1 }}
				mt={3}
			>
				{"€"}
				{priceO}
			</Text>
		</div>
	);
}

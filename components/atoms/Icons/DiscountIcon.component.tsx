import React, { useMemo } from "react";
import { Text } from "@mantine/core";

import { IconStar } from "@tabler/icons-react";

interface DiscountIconProps {
	priceO: number;
	priceR: number;
}

export default function DiscountIcon({ priceO, priceR }: DiscountIconProps) {
	const discount = useMemo(() => {
		return Math.floor(((priceO - priceR) / priceO) * 100);
	}, [priceO, priceR]);

	// We check if the priceO and priceR are numbers. If not, we return null.
	// This is because we don't want to render the icon if the priceO and priceR are not numbers.
	if (typeof priceR !== "number" || typeof priceO !== "number") return null;

	return (
		<div style={{ position: "absolute", top: 5, left: 5 }}>
			<IconStar
				size={75}
				fill={"#FFC107"}
				style={{
					/* we are turning the icon 90 degree */ transform: "rotate(-90deg)",
				}}
				stroke={0}
			/>
			<Text
				size="md"
				style={{
					position: "absolute",
					top: 24,
					right: 20,
					transform: "rotate(-25deg)",
				}}
				fw={600}
			>
				{discount}
				{"%"}
			</Text>
		</div>
	);
}

import React, { useMemo } from "react";
import { Text } from "@mantine/core";

import { IconStar } from "@tabler/icons-react";

interface DiscountIconProps {
	priceO: number;
	priceR?: number;
}

export default function DiscountIcon({ priceO, priceR }: DiscountIconProps) {
	const discount = useMemo(() => {
		if (priceR) {
			return Math.floor(((priceO - priceR) / priceO) * 100);
		} else {
			return 0;
		}
	}, [priceO, priceR]);

	// We check if the priceO and priceR are numbers. If not, we return null.
	// This is because we don't want to render the icon if the priceO and priceR are not numbers.
	if (typeof priceR !== "number" || typeof priceO !== "number") return null;

	const iconColor = discount > 50 ? "#4CAF50" : "#FFC107";

	return (
		<div style={{ position: "absolute", top: 5, left: 5 }}>
			<IconStar
				size={75}
				fill={iconColor}
				style={{ transform: "rotate(-90deg)" }}
				stroke={0}
			/>
			<Text
				size="sm"
				style={{
					position: "absolute",
					top: 26,
					right: 22,
					transform: "rotate(-25deg)",
				}}
				c={"white"}
				fw={600}
			>
				{discount}
				{"%"}
			</Text>
		</div>
	);
}

import { Paper, Box, Checkbox, Text } from "@mantine/core";

import { useDispatch, useSelector } from "react-redux";
import {
	addToBrandFilter,
	removeFromBrandFilter,
	selectFilter,
} from "@/store/filter/filterSlice";

interface BrandFilterProps {
	brands: Set<string>;
}

export default function BrandFilter({ brands }: BrandFilterProps) {
	const dispatch = useDispatch();
	const filterState = useSelector(selectFilter);

	const handleBrandChange = (brand: string, checked: boolean) => {
		if (checked) {
			dispatch(addToBrandFilter(brand));
		} else {
			dispatch(removeFromBrandFilter(brand));
		}
	};

	return (
		<>
			<Text fw={600} size="1.17em">
				Brands
			</Text>
			<Paper shadow="lg" px="sm" pt="md" pb="sm" mb="lg">
				<Box>
					{
						// @ts-ignore
						Array.from(brands)
							.sort((a, b) => a.localeCompare(b))
							.map((brand: string) => (
								<Checkbox
									key={brand}
									iconColor="white"
									label={brand}
									checked={filterState.brands.includes(brand)}
									onChange={(event) =>
										handleBrandChange(brand, event.currentTarget.checked)
									}
									mb={4}
								/>
							))
					}
				</Box>
			</Paper>
		</>
	);
}

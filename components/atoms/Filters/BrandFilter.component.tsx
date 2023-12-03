import { Paper, Box, Checkbox } from "@mantine/core";

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
			<h3>Brands</h3>
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

import { useDispatch, useSelector } from "react-redux";
import { Flex, Select, Group, Radio } from "@mantine/core";

import CheckboxButton from "@/components/atoms/Buttons/CheckboxButton.component";

import { selectFilter, setSortByPrice } from "@/store/filter/filterSlice"; // Adjust the import path as needed

// TODO: Discount filtering will be added
// TODO: Free shipping filtering will be added

export function TopFilter() {
	const dispatch = useDispatch();
	const { sortByPrice } = useSelector(selectFilter);

	const handleSortChange = (value: string | null) => {
		if (value === "Ascending Price") {
			dispatch(setSortByPrice("asc"));
		} else if (value === "Descending Price") {
			dispatch(setSortByPrice("desc"));
		} else {
			// Handle the null case or reset the sorting
			dispatch(setSortByPrice(undefined));
		}
	};

	return (
		<Flex
			mih={50}
			gap="md"
			justify="space-between"
			align="center"
			direction="row"
			wrap="wrap"
			mb={15}
		>
			<Flex gap="md">
				<Radio.Group name="favoriteFramework" withAsterisk>
					<Group mt="xs">
						<CheckboxButton label="Discounted" />
						<CheckboxButton label="Free Shipping" />
					</Group>
				</Radio.Group>
			</Flex>
			<Flex gap="md">
				<Select
					placeholder="Order by price"
					data={["Ascending Price", "Descending Price"]}
					value={
						sortByPrice === "asc"
							? "Ascending Price"
							: sortByPrice === "desc"
							? "Descending Price"
							: undefined
					}
					onChange={handleSortChange}
				/>
			</Flex>
		</Flex>
	);
}

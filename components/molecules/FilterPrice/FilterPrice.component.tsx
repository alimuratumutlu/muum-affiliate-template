import { useDispatch, useSelector } from "react-redux";
import { Flex, Select, Group, Checkbox } from "@mantine/core";

import {
	selectFilter,
	setShowOnlyDiscounted,
	setSortByPrice,
} from "@/store/filter/filterSlice";

export default function FilterPrice() {
	const dispatch = useDispatch();
	const { sortByPrice, showOnlyDiscounted } = useSelector(selectFilter);

	const handleDiscountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		console.log("handleDiscountChange", event.currentTarget.checked);
		dispatch(setShowOnlyDiscounted(event.currentTarget.checked));
	};

	const handleSortChange = (value: string | null) => {
		if (value === "Ascending Price") {
			dispatch(setSortByPrice("asc"));
		} else if (value === "Descending Price") {
			dispatch(setSortByPrice("desc"));
		} else {
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
				<Group mt="xs">
					<Checkbox
						value="react"
						label="Show Only Discounted Products"
						checked={showOnlyDiscounted}
						onChange={handleDiscountChange}
					/>
				</Group>
			</Flex>
			<Flex gap="md">
				<Select
					placeholder="Order by price"
					data={["Ascending Price", "Descending Price", "Default Order"]}
					value={
						sortByPrice === "asc"
							? "Ascending Price"
							: sortByPrice === "desc"
							? "Descending Price"
							: "Order by price"
					}
					onChange={handleSortChange}
				/>
			</Flex>
		</Flex>
	);
}

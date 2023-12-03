import { Autocomplete, rem } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { useDispatch, useSelector } from "react-redux";

import { selectFilter, setSearchTerm } from "@/store/filter/filterSlice";

/* TODO: Apply the search component */

export default function AutoComplete() {
	const dispatch = useDispatch();

	const filterState = useSelector(selectFilter);

	const handleSearchChange = (value: string) => {
		dispatch(setSearchTerm(value));
	};

	return (
		<Autocomplete
			placeholder="Search brand or product"
			leftSection={
				<IconSearch style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
			}
			data={[
				"T-Shirt",
				"Wellensteyn",
				"REVIEW",
				"Wollmantel",
				"s.Oliver Premium",
				"Neo Noir",
				"Laona",
				"Apricot",
				"Mariposa",
			]}
			visibleFrom="xs"
			onChange={handleSearchChange}
			value={filterState.searchTerm}
		/>
	);
}

import { Autocomplete, rem } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { useDispatch, useSelector } from "react-redux";

import { selectFilter, setSearchTerm } from "@/store/filter/filterSlice";
import useFilteredData from "@/hooks/useFilteredData";

export default function AutoComplete() {
	const { uniqueBrands } = useFilteredData();

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
			data={Array.from(uniqueBrands)}
			visibleFrom="xs"
			onChange={handleSearchChange}
			value={filterState.searchTerm}
		/>
	);
}

import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

import { Autocomplete, rem } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

import { selectFilter, setSearchTerm } from "@/store/filter/filterSlice";

import useFilteredData from "@/hooks/useFilteredData";

export default function AutoComplete() {
	const router = useRouter();
	const { uniqueBrands } = useFilteredData();
	const dispatch = useDispatch();
	const filterState = useSelector(selectFilter);

	// We check the router pathname to be sure that we are on the productList page
	const handleSearchChange = (value: string) => {
		if (router.pathname !== "/productList") {
			router.push("/productList");
		}

		// After we are sure that we are on the productList page, we dispatch the setSearchTerm action
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

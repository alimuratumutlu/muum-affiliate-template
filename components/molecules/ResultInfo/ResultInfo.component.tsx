import { Text } from "@mantine/core";

import useFilteredData from "@/hooks/useFilteredData";

export default function ResultInfo() {
	const { isLoading, filteredAndSortedProducts } = useFilteredData();

	return (
		<Text fw={600}>
			{!isLoading && filteredAndSortedProducts?.length} results listed
		</Text>
	);
}

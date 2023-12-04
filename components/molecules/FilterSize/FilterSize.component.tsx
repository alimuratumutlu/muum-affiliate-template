import { useMemo } from "react";
import { Paper, Box, Checkbox, Divider, Flex, Text } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";

import {
	addToNumericSizeFilter,
	removeFromNumericSizeFilter,
	addToLetterSizeFilter,
	removeFromLetterSizeFilter,
	selectFilter,
} from "@/store/filter/filterSlice";

import { getOrderedLetterSizes, getOrderedNumericSizes } from "@/utils/getSize";

import useFilteredData from "@/hooks/useFilteredData";

export default function FilterSize() {
	const dispatch = useDispatch();
	const filterState = useSelector(selectFilter);
	const { uniqueSizes } = useFilteredData();

	// We prevent the calcalulation of orderedNumericSizes and orderedLetterSizes if uniqueSizes is not changed
	const { orderedNumericSizes, orderedLetterSizes } = useMemo(() => {
		const numericSizes = getOrderedNumericSizes(uniqueSizes);
		const letterSizes = getOrderedLetterSizes(uniqueSizes);

		return {
			orderedNumericSizes: numericSizes,
			orderedLetterSizes: letterSizes,
		};
	}, [uniqueSizes]);

	const handleNumericSizeFilterChange = (size: string, checked: boolean) => {
		if (checked) {
			dispatch(addToNumericSizeFilter(size));
		} else {
			dispatch(removeFromNumericSizeFilter(size));
		}
	};

	const handleLetterSizeFilterChange = (size: string, checked: boolean) => {
		if (checked) {
			dispatch(addToLetterSizeFilter(size));
		} else {
			dispatch(removeFromLetterSizeFilter(size));
		}
	};

	return (
		<>
			<Text fw={600} size="1.17em" pt="xl">
				Available Sizes
			</Text>
			<Paper shadow="lg" px="sm" pb="md">
				<h4>Numeric Sizes</h4>
				<Flex wrap="wrap" gap={5}>
					{orderedNumericSizes?.map((size: string) => (
						<Box key={size} mb={6} w={60}>
							<Checkbox
								label={size}
								iconColor="white"
								checked={filterState.sizesNumeric.includes(size)}
								onChange={(event) =>
									handleNumericSizeFilterChange(
										size,
										event.currentTarget.checked
									)
								}
							/>
						</Box>
					))}
				</Flex>
				<Divider my="sm" variant="dashed" />
				<h4>Letter Sizes</h4>
				<Flex wrap="wrap">
					{orderedLetterSizes?.map((size: string) => (
						<Box key={size} mb={6} w={85}>
							<Checkbox
								label={size}
								iconColor="white"
								checked={filterState.sizesLetter.includes(size)}
								onChange={(event) =>
									handleLetterSizeFilterChange(
										size,
										event.currentTarget.checked
									)
								}
							/>
						</Box>
					))}
				</Flex>
			</Paper>
		</>
	);
}

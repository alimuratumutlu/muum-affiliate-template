import { Paper, Box, Checkbox, Divider, Flex, Text } from "@mantine/core";

import { useDispatch, useSelector } from "react-redux";
import {
	addToNumericSizeFilter,
	removeFromNumericSizeFilter,
	addToLetterSizeFilter,
	removeFromLetterSizeFilter,
	selectFilter,
} from "@/store/filter/filterSlice";

interface SizeFilterProps {
	numericSizes: string[];
	letterSizes: string[];
}

export default function SizeFilter({
	numericSizes,
	letterSizes,
}: SizeFilterProps) {
	const dispatch = useDispatch();
	const filterState = useSelector(selectFilter);

	const handleNumericSizeChange = (size: string, checked: boolean) => {
		if (checked) {
			dispatch(addToNumericSizeFilter(size));
		} else {
			dispatch(removeFromNumericSizeFilter(size));
		}
	};

	const handleLetterSizeChange = (size: string, checked: boolean) => {
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
					{numericSizes?.map((size) => (
						<Box key={size} mb={6} w={60}>
							<Checkbox
								label={size}
								iconColor="white"
								checked={filterState.sizesNumeric.includes(size)}
								onChange={(event) =>
									handleNumericSizeChange(size, event.currentTarget.checked)
								}
							/>
						</Box>
					))}
				</Flex>
				<Divider my="sm" variant="dashed" />
				<h4>Letter Sizes</h4>
				<Flex wrap="wrap">
					{letterSizes?.map((size) => (
						<Box key={size} mb={6} w={85}>
							<Checkbox
								label={size}
								iconColor="white"
								checked={filterState.sizesLetter.includes(size)}
								onChange={(event) =>
									handleLetterSizeChange(size, event.currentTarget.checked)
								}
							/>
						</Box>
					))}
				</Flex>
			</Paper>
		</>
	);
}

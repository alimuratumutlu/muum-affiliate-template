import { Paper, Box, Checkbox, Divider, Flex } from "@mantine/core";

interface SizeFilterProps {
	numericSizes: string[];
	letterSizes: string[];
}
// TODO: Brands will be imported from filter state
// TODO: Filter state will be updated when user clicks on a brand
// TODO: Filter state initial state
export default function SizeFilter({
	numericSizes,
	letterSizes,
}: SizeFilterProps) {
	return (
		<>
			<h3>Available Sizes</h3>
			<Paper shadow="lg" px="sm" pb="md">
				<h4>Numeric Sizes</h4>
				<Flex wrap="wrap" gap={5}>
					{numericSizes?.map((size) => (
						<Box key={size} mb={6} w={60}>
							<Checkbox
								label={size}
								iconColor="white"
								wrapperProps={{
									onClick: () => console.log(size),
								}}
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
								wrapperProps={{
									onClick: () => console.log(size),
								}}
							/>
						</Box>
					))}
				</Flex>
			</Paper>
		</>
	);
}

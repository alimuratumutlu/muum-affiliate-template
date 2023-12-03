import { Flex, Select, Group, Radio } from "@mantine/core";

import CheckboxButton from "@/components/atoms/Buttons/CheckboxButton.component";

export function TopFilter() {
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
				/>
			</Flex>
		</Flex>
	);
}

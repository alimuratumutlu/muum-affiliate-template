import React from "react";

import useStatistics from "@/hooks/useStatistics";
import {
	Container,
	Divider,
	Paper,
	Text,
	List,
	ThemeIcon,
	rem,
} from "@mantine/core";
import { IconCircleCheck, IconCircleDashed } from "@tabler/icons-react";
// TODO: Charts will be added

export default function Statistics() {
	const {
		mostProductsUnder40Brand,
		mostSizesBrand,
		lowestAvgPriceBrandSize32,
	} = useStatistics();

	return (
		<Container fluid mt={150}>
			<Paper shadow="lg" px="sm" pt="md" pb="sm" mb="lg">
				<Text fw={600} size="xl">
					Q1 : Which brand has the most products that cost less than 40 EUR?
				</Text>
				<Divider my="sm" variant="dashed" />
				<Text fw={600} size="xl">
					A1 : {mostProductsUnder40Brand}
				</Text>
				<Text mb="sm">
					As we have been asked to find the brand that has the most products
					that cost less than 40 EUR, I have done the following steps:
				</Text>
				<List
					spacing="xs"
					size="sm"
					center
					icon={
						<ThemeIcon color="teal" size={24} radius="xl">
							<IconCircleCheck style={{ width: rem(16), height: rem(16) }} />
						</ThemeIcon>
					}
				>
					<List.Item>
						Filtering the products that cost less than 40 EUR.
					</List.Item>
					<List.Item>
						Counting the number of these products for each brand.
					</List.Item>
					<List.Item>Determining which brand has the highest count.</List.Item>
				</List>
			</Paper>
			<Paper shadow="lg" px="sm" pt="md" pb="sm" mb="lg">
				<Text fw={600} size="xl">
					Q2 : Which brand hoffers the largest selection of sizes to the
					customer?
				</Text>
				<Divider my="sm" variant="dashed" />
				<Text fw={600} size="xl">
					A2 : {mostSizesBrand}
				</Text>
				<Text mb="sm">
					Calculating the unique sizes was the most important part of this
					question. I have done the following steps:
				</Text>
				<List
					spacing="xs"
					size="sm"
					center
					icon={
						<ThemeIcon color="teal" size={24} radius="xl">
							<IconCircleCheck style={{ width: rem(16), height: rem(16) }} />
						</ThemeIcon>
					}
				>
					<List.Item>Counting the number of unique sizes per brand.</List.Item>
					<List.Item>
						Determining which brand has the largest number of unique sizes.
					</List.Item>
				</List>
			</Paper>
			<Paper shadow="lg" px="sm" pt="md" pb="sm" mb="lg">
				<Text fw={600} size="xl">
					Q3 : Which brand brand offers the lowest average price for customers
					wearing size “32”?
				</Text>
				<Divider my="sm" variant="dashed" />
				<Text fw={600} size="xl">
					A3 : {lowestAvgPriceBrandSize32}
				</Text>
				<Text mb="sm">
					Size “32” is the key point of this question. I have done the following
					steps:
				</Text>
				<List
					spacing="xs"
					size="sm"
					center
					icon={
						<ThemeIcon color="teal" size={24} radius="xl">
							<IconCircleCheck style={{ width: rem(16), height: rem(16) }} />
						</ThemeIcon>
					}
				>
					<List.Item>
						Filtering products that are available in size “32” .
					</List.Item>
					<List.Item>
						Calculating the average price for these products for each brand.
					</List.Item>
					<List.Item>
						Finding the brand with the lowest average price.
					</List.Item>
				</List>
			</Paper>
		</Container>
	);
}

import { Paper, Box, Checkbox } from "@mantine/core";

interface BrandFilterProps {
	brands: Set<string>;
}
// TODO: Brands will be imported from filter state
// TODO: Filter state will be updated when user clicks on a brand
// TODO: Filter state initial state
export default function BrandFilter({ brands }: BrandFilterProps) {
	return (
		<>
			<h3>Brands</h3>
			<Paper shadow="lg" px="sm" pt="md" pb="sm" mb="lg">
				<Box>
					{
						// @ts-ignore
						Array.from(brands)
							.sort((a, b) => a.localeCompare(b))
							.map((brand: string) => (
								<Checkbox
									key={brand}
									mb={4}
									iconColor="white"
									label={brand}
									wrapperProps={{
										onClick: () => console.log(brand),
									}}
								/>
							))
					}
				</Box>
			</Paper>
		</>
	);
}

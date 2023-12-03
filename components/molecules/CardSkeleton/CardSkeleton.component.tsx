import { Grid, Skeleton } from "@mantine/core";

export function CardSkeleton() {
	return (
		<Grid.Col span={{ base: 12, xs: 6, sm: 6, md: 4, lg: 4, xl: 3 }} pb="md">
			<>
				<Skeleton height={400} />
				<Skeleton height={50} mt={6} />
				<Skeleton height={50} mt={6} />
				<Skeleton height={50} mt={6} />
			</>
		</Grid.Col>
	);
}

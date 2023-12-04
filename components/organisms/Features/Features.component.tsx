import {
	ThemeIcon,
	Text,
	Title,
	Container,
	SimpleGrid,
	rem,
} from "@mantine/core";

import classes from "./Features.module.css";

import FeatureList from "@/constants/Features";

interface FeatureProps {
	icon: React.FC<any>;
	title: React.ReactNode;
	description: React.ReactNode;
}

export function Feature({ icon: Icon, title, description }: FeatureProps) {
	return (
		<div>
			<ThemeIcon variant="light" size={40} radius={40}>
				<Icon style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
			</ThemeIcon>
			<Text mt="sm" mb={7}>
				{title}
			</Text>
			<Text size="sm" c="dimmed" lh={1.6}>
				{description}
			</Text>
		</div>
	);
}

export default function Features() {
	const features = FeatureList.map((feature, index) => (
		<Feature {...feature} key={index} />
	));

	return (
		<Container className={classes.wrapper}>
			<Title className={classes.title}>
				Integrate effortlessly with minimum change
			</Title>

			<Container size={560} p={0}>
				<Text size="sm" className={classes.description}>
					This repo is built for developers who want to build an e-commerce site
					with Next.js and Mantine. It provides a complete development
					environment and a set of ready-to-use components and hooks to build a
					complete e-commerce site.
				</Text>
			</Container>

			<SimpleGrid
				mt={60}
				cols={{ base: 1, sm: 2, md: 3 }}
				spacing={{ base: "xl", md: 50 }}
				verticalSpacing={{ base: "xl", md: 50 }}
			>
				{features}
			</SimpleGrid>
		</Container>
	);
}

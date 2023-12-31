/* eslint-disable react/no-unescaped-entities */
import { Title, Text, Container } from "@mantine/core";

import { GithubButton, MuumButton } from "@/components";
import { Dots } from "./Hero.dots";

import classes from "./Hero.module.css";

export default function HeroText() {
	return (
		<Container className={classes.wrapper} size={1400} mt="xl">
			<Dots className={classes.dots} style={{ left: 0, top: 0 }} />
			<Dots className={classes.dots} style={{ left: 60, top: 0 }} />
			<Dots className={classes.dots} style={{ left: 0, top: 140 }} />
			<Dots className={classes.dots} style={{ right: 0, top: 60 }} />

			<div className={classes.inner}>
				<Title className={classes.title}>
					Open Source{" "}
					<Text component="span" className={classes.highlight} inherit>
						Fashion Store
					</Text>{" "}
					for{" "}
					<Text
						component="span"
						inherit
						variant="gradient"
						gradient={{ from: "pink", to: "yellow" }}
						fw={800}
					>
						YOU
					</Text>
				</Title>

				<Container p={0} size={600}>
					<Text size="lg" c="dimmed" className={classes.description}>
						We're more than just a store; we're a destination for those who see
						fashion as a form of self-expression and who are excited by the
						possibilities that technology brings to enhance this expression.
					</Text>
				</Container>

				<div className={classes.controls}>
					<GithubButton />
					<MuumButton />
				</div>
			</div>
		</Container>
	);
}

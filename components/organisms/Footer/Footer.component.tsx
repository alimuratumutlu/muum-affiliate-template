import { useMemo } from "react";
import { Container, Group, Anchor, Divider } from "@mantine/core";
import Logo from "@/components/atoms/Logo/Logo.component";

import { FooterRoutes } from "@/routes/FooterRoutes";

import classes from "./Footer.module.css";

export function Footer() {
	// We are mapping the links not to cause re-render isssues when the component is updated
	const items = useMemo(
		() =>
			FooterRoutes.map((link) => (
				<Anchor<"a">
					c="dimmed"
					key={link.label}
					href={link.link}
					onClick={(event) => event.preventDefault()}
					size="sm"
				>
					{link.label}
				</Anchor>
			)),
		[FooterRoutes]
	);

	return (
		<>
			<Divider />
			<Container size={1400} className={classes.inner}>
				<Logo />
				<Group className={classes.links}>{items}</Group>
			</Container>
		</>
	);
}

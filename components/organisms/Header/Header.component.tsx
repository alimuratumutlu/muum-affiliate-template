import { useMemo } from "react";
import Link from "next/link";

import { Group, Burger, Container } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import { Logo, ThemeIcon, AutoComplete, CartIcon } from "@/components";

import { HeaderRoutes } from "@/routes/HeaderRoutes";

import classes from "./Header.module.css";

// TODO: Mobile menu visibility

export default function Header() {
	const [opened, { toggle }] = useDisclosure(false);

	const headerLinks = useMemo(() => {
		return HeaderRoutes.map((link) => (
			<Link key={link.label} href={link.link} className={classes.link}>
				{link.label}
			</Link>
		));
	}, []);

	return (
		<Container size={1400} className={classes.wrapper}>
			<header className={classes.header}>
				<div className={classes.inner}>
					<Group>
						<Burger
							opened={opened}
							onClick={toggle}
							size="sm"
							hiddenFrom="sm"
						/>
						<Logo />
					</Group>

					<Group>
						<Group ml={50} gap={5} visibleFrom="sm">
							{headerLinks}
						</Group>
						<AutoComplete />
						<ThemeIcon />
						<CartIcon />
					</Group>
				</div>
			</header>
		</Container>
	);
}

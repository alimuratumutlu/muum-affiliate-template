import { useMemo } from "react";
import Link from "next/link";

import {
	Group,
	Burger,
	Container,
	Divider,
	Drawer,
	ScrollArea,
	rem,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import {
	Logo,
	ThemeIcon,
	AutoComplete,
	CartIcon,
	GithubButton,
} from "@/components";

import { HeaderRoutes } from "@/routes/HeaderRoutes";

import classes from "./Header.module.css";

export default function Header() {
	const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
		useDisclosure(false);

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
							opened={drawerOpened}
							onClick={toggleDrawer}
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
			<Drawer
				opened={drawerOpened}
				onClose={closeDrawer}
				size="100%"
				padding="md"
				title="Navigation"
				hiddenFrom="sm"
				zIndex={1000000}
			>
				<ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
					<Divider my="sm" />

					{headerLinks}

					<Divider my="sm" />

					<Group grow px="md">
						<GithubButton />
					</Group>
				</ScrollArea>
			</Drawer>
		</Container>
	);
}

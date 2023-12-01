import Link from "next/link";

import { Autocomplete, Group, Burger, rem } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconSearch } from "@tabler/icons-react";

import { HeaderRoutes } from "@/routes/HeaderRoutes";

import classes from "./Header.module.css";
import Logo from "../Logo/Logo.component";

export function HeaderSearch() {
	const [opened, { toggle }] = useDisclosure(false);

	const items = HeaderRoutes.map((link) => (
		<Link key={link.label} href={link.link} className={classes.link}>
			{link.label}
		</Link>
	));

	return (
		<header className={classes.header}>
			<div className={classes.inner}>
				<Group>
					<Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
					<Logo />
				</Group>

				<Group>
					<Group ml={50} gap={5} className={classes.links} visibleFrom="sm">
						{items}
					</Group>
					{/* TODO: Apply the search component */}
					<Autocomplete
						className={classes.search}
						placeholder="Search brand or product"
						leftSection={
							<IconSearch
								style={{ width: rem(16), height: rem(16) }}
								stroke={1.5}
							/>
						}
						data={[
							"T-Shirt",
							"Wellensteyn",
							"REVIEW",
							"Wollmantel",
							"s.Oliver Premium",
							"Neo Noir",
							"Laona",
							"Apricot",
							"Mariposa",
						]}
						visibleFrom="xs"
					/>
				</Group>
			</div>
		</header>
	);
}

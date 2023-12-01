import { Group, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import Logo from "@/components/atoms/Logo/Logo.component";
import ThemeIcon from "@/components/atoms/Icons/ThemeIcon.component";

import classes from "./Header.module.css";
import AutoComplete from "@/components/molecules/AutoComplete/AutoComplete.component";
import HeaderLinks from "@/components/molecules/HeaderLinks/HeaderLinks.component";

export function HeaderSearch() {
	const [opened, { toggle }] = useDisclosure(false);

	return (
		<header className={classes.header}>
			<div className={classes.inner}>
				<Group>
					<Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
					<Logo />
				</Group>

				<Group>
					<Group ml={50} gap={5} visibleFrom="sm">
						<HeaderLinks />
					</Group>
					<AutoComplete />
					<ThemeIcon />
				</Group>
			</div>
		</header>
	);
}

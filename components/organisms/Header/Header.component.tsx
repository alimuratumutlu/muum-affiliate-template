import { Group, Burger, Container } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import Logo from "@/components/atoms/Logo/Logo.component";
import ThemeIcon from "@/components/atoms/Icons/ThemeIcon.component";
import AutoComplete from "@/components/molecules/AutoComplete/AutoComplete.component";
import HeaderLinks from "@/components/molecules/HeaderLinks/HeaderLinks.component";
import CartIcon from "@/components/atoms/Icons/CartIcon.component";

import classes from "./Header.module.css";

export function HeaderSearch() {
	const [opened, { toggle }] = useDisclosure(false);

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
							<HeaderLinks />
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

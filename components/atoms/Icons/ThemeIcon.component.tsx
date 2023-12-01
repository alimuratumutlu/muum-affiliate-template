import {
	ActionIcon,
	useComputedColorScheme,
	useMantineColorScheme,
} from "@mantine/core";
import { IconSun, IconMoon } from "@tabler/icons-react";
import cx from "clsx";

import classes from "@/styles/Icons.module.css";

export default function ThemeIcon() {
	const { setColorScheme } = useMantineColorScheme();
	const computedColorScheme = useComputedColorScheme("light", {
		getInitialValueInEffect: true,
	});

	return (
		<ActionIcon
			onClick={() =>
				setColorScheme(computedColorScheme === "light" ? "dark" : "light")
			}
			variant="default"
			size="lg"
			p="xs"
			aria-label="Toggle color scheme"
		>
			<IconSun className={cx(classes.icon, classes.light)} stroke={2.5} />
			<IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
		</ActionIcon>
	);
}

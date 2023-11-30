import { createTheme, mergeMantineTheme, DEFAULT_THEME } from "@mantine/core";

const themeOverride = createTheme({
	fontFamily: "Open Sans, sans-serif",
	primaryColor: "cyan",
	defaultRadius: "md",
	defaultGradient: {
		from: "orange",
		to: "red",
		deg: 45,
	},
});
export const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride);

import "@/styles/globals.css";
import "@mantine/core/styles.css";

import { AppShell, MantineProvider } from "@mantine/core";

import type { AppProps } from "next/app";

import { theme } from "@/styles/theme";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<MantineProvider theme={theme} defaultColorScheme="dark">
			<AppShell>
				<Component {...pageProps} />
			</AppShell>
		</MantineProvider>
	);
}

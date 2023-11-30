import "@/styles/globals.css";
import "@mantine/core/styles.css";

import { AppShell, MantineProvider } from "@mantine/core";

// We are using Mantine UI for this project so we need to wrap our app with the MantineProvider
// https://mantine.dev/core/getting-started/#mantineprovider

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

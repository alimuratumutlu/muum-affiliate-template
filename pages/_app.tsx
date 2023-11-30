import "@/styles/globals.css";
import "@mantine/core/styles.css";

import { useState } from "react";
import type { AppProps } from "next/app";

// Server State is the data that is managed by the server and is typically dynamic. It can be things like user data, product listings, etc. Server State is often fetched and used by client-side applications to display up-to-date information.
// https://react-query.tanstack.com/guides/ssr#hydration

// We are using React Query for this project so we need to wrap our app with the QueryClientProvider
// https://react-query.tanstack.com/overview#queryclientprovider

import {
	HydrationBoundary,
	QueryClient,
	QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// We are using Mantine UI for this project so we need to wrap our app with the MantineProvider
// https://mantine.dev/core/getting-started/#mantineprovider

import { AppShell, MantineProvider } from "@mantine/core";

import { theme } from "@/styles/theme";

export default function App({ Component, pageProps }: AppProps) {
	const [queryClient] = useState(() => new QueryClient());

	return (
		<QueryClientProvider client={queryClient}>
			<HydrationBoundary state={pageProps.dehydratedState}>
				<MantineProvider theme={theme} defaultColorScheme="dark">
					<AppShell>
						<Component {...pageProps} />
					</AppShell>
				</MantineProvider>
			</HydrationBoundary>
			<ReactQueryDevtools />
		</QueryClientProvider>
	);
}

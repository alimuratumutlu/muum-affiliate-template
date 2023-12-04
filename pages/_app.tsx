import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";

import { useState } from "react";
import type { AppProps } from "next/app";
import { Provider as ReduxProvider } from "react-redux";

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

// TODO: On page SEO Head will be added here

import { AppShell, Container, MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";

import { theme } from "@/styles/theme";
import { store } from "@/store";

import { HeaderSearch } from "@/components/organisms/Header/Header.component";
import { Footer } from "@/components/organisms/Footer/Footer.component";

export default function App({ Component, pageProps }: AppProps) {
	const [queryClient] = useState(() => new QueryClient());

	return (
		<ReduxProvider store={store}>
			<QueryClientProvider client={queryClient}>
				<HydrationBoundary state={pageProps.dehydratedState}>
					<MantineProvider theme={theme} defaultColorScheme="light">
						<Notifications />
						<AppShell header={{ height: 80 }}>
							<AppShell.Header>
								<HeaderSearch />
							</AppShell.Header>
							<Container
								size={1400}
								style={{ minHeight: "calc(100vh - 80px)" }}
							>
								<Component {...pageProps} />
							</Container>
							<AppShell.Footer>
								<Footer />
							</AppShell.Footer>
						</AppShell>
					</MantineProvider>
				</HydrationBoundary>
				<ReactQueryDevtools />
			</QueryClientProvider>
		</ReduxProvider>
	);
}

export const dataFetcher = async <T>(url: string): Promise<T | null> => {
	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		return (await response.json()) as T;
	} catch (error) {
		console.error("Fetching error: ", error);
		return null;
	}
};

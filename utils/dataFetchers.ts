export const getProducts = async () => {
	const response = await fetch("api/products");
	if (!response.ok) {
		throw new Error("Network response was not ok");
	}
	return response.json();
};

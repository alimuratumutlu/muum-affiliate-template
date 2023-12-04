export const isNumericSize = (size: string) => {
	return (
		// @ts-ignore
		!isNaN(size) ||
		["XS", "S", "M", "L", "XL", "XXL", "XXXL", "XXS", "4XL", "5XL"].indexOf(
			size
		) === -1
	);
};

export const isLetterSize = (size: string) => {
	return !isNumericSize(size);
};

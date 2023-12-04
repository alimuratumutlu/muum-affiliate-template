import { isNumericSize, isLetterSize } from "@/utils/getTypeInfo";

export const getOrderedNumericSizes = (sizes: string[]) => {
	return sizes
		.filter(isNumericSize)
		.sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
};

export const getOrderedLetterSizes = (sizes: string[]) => {
	return sizes
		.filter((size) => isLetterSize(size))
		.sort((a, b) => a.localeCompare(b));
};

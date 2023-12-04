import { getOrderedNumericSizes, getOrderedLetterSizes } from "../getSize";

describe("Size Sorting Utilities", () => {
	describe("getOrderedNumericSizes", () => {
		it("filters and sorts numeric sizes correctly", () => {
			const sizes = ["10", "2", "8", "5"];
			const orderedSizes = getOrderedNumericSizes(sizes);
			expect(orderedSizes).toEqual(["2", "5", "8", "10"]);
		});
	});

	describe("getOrderedLetterSizes", () => {
		it("filters and sorts letter sizes correctly", () => {
			const sizes = ["S", "L", "M", "XS"];
			const orderedSizes = getOrderedLetterSizes(sizes);
			expect(orderedSizes).toEqual(["L", "M", "S", "XS"]);
		});
	});
});

import { isNumericSize, isLetterSize } from "@/utils/getTypeInfo";

describe("Size Type Identification Utilities", () => {
	describe("isNumericSize", () => {
		it("returns true for numeric sizes", () => {
			expect(isNumericSize("10")).toBeTruthy();
			expect(isNumericSize("2")).toBeTruthy();
		});

		it("returns false for letter sizes", () => {
			expect(isNumericSize("S")).toBeFalsy();
			expect(isNumericSize("M")).toBeFalsy();
		});
	});

	describe("isLetterSize", () => {
		it("returns true for letter sizes", () => {
			expect(isLetterSize("S")).toBeTruthy();
			expect(isLetterSize("M")).toBeTruthy();
		});

		it("returns false for numeric sizes", () => {
			expect(isLetterSize("10")).toBeFalsy();
			expect(isLetterSize("2")).toBeFalsy();
		});
	});
});

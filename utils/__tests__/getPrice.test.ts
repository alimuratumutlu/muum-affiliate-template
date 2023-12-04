import { getPrice } from "../getPrice";
import { Product } from "@/types";

describe("getPrice", () => {
	it("returns priceR when it is not null or undefined", () => {
		const product: Product = {
			id: "9427344",
			brand: "Lacoste",
			description: "Poloshirt mit Logo-Badge",
			priceO: 39.95,
			priceR: 9.95,
			images: [
				"https://s3-eu-west-1.amazonaws.com/fid-media-prod/2f852b18-958b-4719-9694-5d1d284c98ab.png",
				"https://s3-eu-west-1.amazonaws.com/fid-media-prod/7d09295f-4ffd-4ce0-b206-dda664d7ad14.jpg",
			],
			sizes: ["2", "3", "4", "5", "6", "7", "8", "00"],
		};
		expect(getPrice(product)).toBe(9.95);
	});

	it("returns priceO when priceR is undefined", () => {
		const productWithUndefinedPriceR: Product = {
			id: "9427344",
			brand: "Lacoste",
			description: "Poloshirt mit Logo-Badge",
			priceO: 69.95,
			priceR: undefined,
			images: [
				"https://s3-eu-west-1.amazonaws.com/fid-media-prod/2f852b18-958b-4719-9694-5d1d284c98ab.png",
				"https://s3-eu-west-1.amazonaws.com/fid-media-prod/7d09295f-4ffd-4ce0-b206-dda664d7ad14.jpg",
			],
			sizes: ["2", "3", "4", "5", "6", "7", "8", "00"],
		};
		expect(getPrice(productWithUndefinedPriceR)).toBe(69.95);
	});
});

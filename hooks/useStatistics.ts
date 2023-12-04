import { useQuery } from "@tanstack/react-query";

import { getProducts } from "@/utils/getData";
import { getPrice } from "@/utils/getPrice";

import { Product } from "@/types";

interface BrandCount {
	[brand: string]: number;
}

interface SizeSelection {
	[brand: string]: Set<string>;
}

interface AveragePrice {
	[brand: string]: number[];
}

const useStatistics = () => {
	const { data } = useQuery({
		queryKey: ["products"],
		queryFn: getProducts,
	});

	if (!data) {
		return {
			mostProductsUnder40Brand: "",
			mostSizesBrand: "",
			lowestAvgPriceBrandSize32: "",
		};
	}

	// I use getPrice to get the real price of the product
	// We first filter the products under 40 EUR

	const productsUnder40 = data.filter((p: Product) => getPrice(p) < 40);

	// We then count the number of products under 40 EUR per brand
	// Reduce method is used to create an object with the brand as key and the number of products as value

	const brandCountUnder40 = productsUnder40.reduce(
		(acc: BrandCount, p: Product) => {
			acc[p.brand] = (acc[p.brand] || 0) + 1;
			return acc;
		},
		{}
	);

	// We then get the brand with the most products under 40 EUR
	// We use Object.keys to get the keys of the object
	// We then use reduce to compare the value of each key and return the key with the highest value

	const mostProductsUnder40Brand = Object.keys(brandCountUnder40).reduce(
		(a, b) => (brandCountUnder40[a] > brandCountUnder40[b] ? a : b)
	);

	// We here use reduce method to create an object with the brand as key and a Set of sizes as value

	const sizeSelection = data.reduce((acc: SizeSelection, p: Product) => {
		p.sizes.forEach((size: string) => {
			acc[p.brand] = acc[p.brand] || new Set();
			acc[p.brand].add(size);
		});
		return acc;
	}, {});

	// We then get the brand with the most sizes
	// We use Object.keys to get the keys of the object

	const mostSizesBrand = Object.keys(sizeSelection).reduce((a, b) =>
		sizeSelection[a].size > sizeSelection[b].size ? a : b
	);

	// We firstly filter the products with size 32

	const size32Products = data.filter((p: Product) => p.sizes.includes("32"));

	// We then get the average price of each brand for size 32

	const averagePriceSize32 = size32Products.reduce(
		(acc: AveragePrice, p: Product) => {
			acc[p.brand] = acc[p.brand] || [];
			acc[p.brand].push(getPrice(p));
			return acc;
		},
		{}
	);

	// We then get the brand with the lowest average price for size 32

	for (let brand in averagePriceSize32) {
		averagePriceSize32[brand] =
			averagePriceSize32[brand].reduce((a: number, b: number) => a + b, 0) /
			averagePriceSize32[brand].length;
	}

	const lowestAvgPriceBrandSize32 = Object.keys(averagePriceSize32).reduce(
		(a, b) => (averagePriceSize32[a] < averagePriceSize32[b] ? a : b)
	);

	return {
		mostProductsUnder40Brand,
		mostSizesBrand,
		lowestAvgPriceBrandSize32,
	};
};

export default useStatistics;

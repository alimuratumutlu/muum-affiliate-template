import BrandFilter from "@/components/atoms/Filters/BrandFilter.component";
import SizeFilter from "@/components/atoms/Filters/SizeFilter.component";

import { isNumericSize } from "@/utils/typeCheck";
interface FilterProps {
	brands: Set<string>;
	sizes: Set<string>;
}

// TODO: Brands will be imported from filter state
// TODO: Numeric sizes will be imported from filter state

export function Filter({ brands, sizes }: FilterProps) {
	const allSizes = Array.from(sizes);

	const numericSizes = allSizes
		.filter(isNumericSize)
		.sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

	const letterSizes = allSizes
		.filter((size) => !isNumericSize(size))
		.sort((a, b) => a.localeCompare(b));

	return (
		<>
			<BrandFilter brands={brands} />
			<SizeFilter numericSizes={numericSizes} letterSizes={letterSizes} />
		</>
	);
}

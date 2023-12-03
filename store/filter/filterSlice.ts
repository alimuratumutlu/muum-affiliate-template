import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

// Define a type for the slice state
interface FilterState {
	brands: string[];
	sizesNumeric: string[];
	sizesLetter: string[];
}

// Define the initial state using that type
const initialState: FilterState = {
	brands: [],
	sizesNumeric: [],
	sizesLetter: [],
};

export const filterSlice = createSlice({
	name: "filter",
	// `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {
		addToBrandFilter: (state, action: PayloadAction<string>) => {
			const brand = action.payload;
			if (state.brands.includes(brand)) {
				return;
			}
			state.brands.push(brand);
		},
		removeFromBrandFilter: (state, action: PayloadAction<string>) => {
			const brand = action.payload;
			state.brands = state.brands.filter((b) => b !== brand);
		},
		addToNumericSizeFilter: (state, action: PayloadAction<string>) => {
			const numericSize = action.payload;
			if (state.sizesNumeric.includes(numericSize)) {
				return;
			}
			state.sizesNumeric.push(numericSize);
		},
		removeFromNumericSizeFilter: (state, action: PayloadAction<string>) => {
			const numericSize = action.payload;
			state.sizesNumeric = state.sizesNumeric.filter((s) => s !== numericSize);
		},
		addToLetterSizeFilter: (state, action: PayloadAction<string>) => {
			const letterSize = action.payload;
			if (state.sizesLetter.includes(letterSize)) {
				return;
			}
			state.sizesLetter.push(letterSize);
		},
		removeFromLetterSizeFilter: (state, action: PayloadAction<string>) => {
			const letterSize = action.payload;
			state.sizesLetter = state.sizesLetter.filter((s) => s !== letterSize);
		},
		resetFilters: (state) => {
			state.brands = [];
			state.sizesNumeric = [];
			state.sizesLetter = [];
		},
	},
});

export const {
	addToBrandFilter,
	removeFromBrandFilter,
	addToNumericSizeFilter,
	removeFromNumericSizeFilter,
	addToLetterSizeFilter,
	removeFromLetterSizeFilter,
	resetFilters,
} = filterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectFilter = (state: RootState) => state.filter;

export default filterSlice.reducer;

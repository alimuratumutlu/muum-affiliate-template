import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

// Define a type for the slice state
interface FilterState {
	brands: string[];
	sizes: string[];
}

// Define the initial state using that type
const initialState: FilterState = {
	brands: [],
	sizes: [],
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
		addToSizeFilter: (state, action: PayloadAction<string>) => {
			const size = action.payload;
			if (state.sizes.includes(size)) {
				return;
			}
			state.sizes.push(size);
		},
		removeFromSizeFilter: (state, action: PayloadAction<string>) => {
			const size = action.payload;
			state.sizes = state.sizes.filter((s) => s !== size);
		},
		resetFilters: (state) => {
			state.brands = [];
			state.sizes = [];
		},
	},
});

export const {
	addToBrandFilter,
	removeFromBrandFilter,
	addToSizeFilter,
	removeFromSizeFilter,
	resetFilters,
} = filterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectFilter = (state: RootState) => state.filter;

export default filterSlice.reducer;

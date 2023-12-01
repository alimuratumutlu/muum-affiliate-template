// CartSlice

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

// Define a type for the slice state
interface CartState {
	items: { [key: string]: number };
}

// Define the initial state using that type
const initialState: CartState = {
	items: {},
};

export const cartSlice = createSlice({
	name: "cart",
	// `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<string>) => {
			const id = action.payload;
			if (state.items[id]) {
				state.items[id]++;
			} else {
				state.items[id] = 1;
			}
		},
		removeFromCart: (state, action: PayloadAction<string>) => {
			const id = action.payload;
			if (state.items[id] === 1) {
				delete state.items[id];
			} else {
				state.items[id]--;
			}
		},
	},
});

export const { addToCart, removeFromCart } = cartSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCart = (state: RootState) => state.cart;

export default cartSlice.reducer;

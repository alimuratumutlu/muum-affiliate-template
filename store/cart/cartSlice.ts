import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

interface CartItemPayload {
	id: string;
	name: string;
	price: number;
	size: string | null;
	thumbnail: string;
}

// Extend CartItem from CartItemPayload and add the count property
interface CartItem extends CartItemPayload {
	count: number;
}

// Define a type for the slice state
interface CartState {
	items: { [key: string]: CartItem };
}

// Define the initial state using that type
const initialState: CartState = {
	items: {},
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<CartItemPayload>) => {
			const newItem = action.payload;
			if (state.items[newItem.id]) {
				state.items[newItem.id].count++;
			} else {
				state.items[newItem.id] = { ...newItem, count: 1 };
			}
		},
		removeFromCart: (state, action: PayloadAction<string>) => {
			const id = action.payload;
			if (state.items[id] && state.items[id].count === 1) {
				delete state.items[id];
			} else if (state.items[id]) {
				state.items[id].count--;
			}
		},
	},
});

export const { addToCart, removeFromCart } = cartSlice.actions;

// Selector to calculate total count and total fee
export const selectCart = (state: RootState) => state.cart;
export const selectCartTotal = (state: RootState) => {
	const items = Object.values(state.cart.items);
	return items.reduce((total, item) => total + item.count * item.price, 0);
};
export const selectCartItemCount = (state: RootState) => {
	const items = Object.values(state.cart.items);
	return items.reduce((count, item) => count + item.count, 0);
};

export default cartSlice.reducer;

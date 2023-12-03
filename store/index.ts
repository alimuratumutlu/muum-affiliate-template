import { configureStore, combineReducers } from "@reduxjs/toolkit";

import cartReducer from "@/store/cart/cartSlice";
import filterReducer from "@/store/filter/filterSlice";
import userReducer from "@/store/user/userSlice";

const rootReducer = combineReducers({
	cart: cartReducer,
	filter: filterReducer,
	user: userReducer,
});

export const store = configureStore({
	reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

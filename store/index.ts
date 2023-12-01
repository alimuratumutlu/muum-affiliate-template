import { configureStore, combineReducers } from "@reduxjs/toolkit";

import cartReducer from "@/features/cartSlice";
import userReducer from "@/features/userSlice";

const rootReducer = combineReducers({
	cart: cartReducer,
	user: userReducer,
});

export const store = configureStore({
	reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

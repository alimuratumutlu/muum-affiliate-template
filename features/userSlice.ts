// userSlice

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

// Define a type for the slice state
interface UserState {
	name: string;
	email: string;
}

// Define the initial state using that type
const initialState: UserState = {
	name: "",
	email: "",
};

export const userSlice = createSlice({
	name: "user",
	// `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<UserState>) => {
			const user = action.payload;
			state.name = user.name;
			state.email = user.email;
		},
	},
});

export const { setUser } = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;

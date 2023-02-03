import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "./types";

const initialState: UserState = {
    userDetails: undefined,
    loggedInStatus: "unset"
}

const userSlice = createSlice({
    initialState: initialState,
    name: "user",
    reducers: {
        signInUser: (state) => {
            state.loggedInStatus = "loging";
            state.userDetails = undefined;
        },
        signInSuccess: (state, action) => {
            state.loggedInStatus = "loginsuccess";
            state.userDetails = action.payload;
        },
        signInError: (state) => {
            state.loggedInStatus = "loginerror";
            state.userDetails = undefined;
        }
    }
})

export const { signInUser, signInSuccess, signInError } = userSlice.actions;

export default userSlice;
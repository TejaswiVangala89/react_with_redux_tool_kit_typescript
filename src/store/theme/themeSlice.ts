import { createSlice } from "@reduxjs/toolkit";
import { getTheme, initialState, ThemeType } from "./types";

const themeSlice = createSlice({
    initialState: initialState,
    name: "theme",
    reducers: {
        setTheme: (state, action) => {
            const themeType = action.payload as ThemeType;
            state.themeValue = getTheme(themeType);
            state.themeType = themeType;
        }
    }
});

export default themeSlice;
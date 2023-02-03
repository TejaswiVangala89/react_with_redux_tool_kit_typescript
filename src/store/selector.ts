import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./types";

export const selectSelf = (state: RootState) => state;

export const getThemeState = createSelector(
    selectSelf,
    (state) => state.theme
);

export const getUserState = createSelector(
    selectSelf,
    (state) => state.user
);
import { configureStore } from "@reduxjs/toolkit"
import themeSlice from "./theme/themeSlice";
import userSlice from "./user/userSlice"

const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        theme: themeSlice.reducer
    }
})

export default store;
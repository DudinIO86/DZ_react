import { configureStore } from "@reduxjs/toolkit";
import themeReducer  from "../Slice/ThemeSlice.js";

export const store = configureStore({
    reducer: {
        theme: themeReducer,
    },
});
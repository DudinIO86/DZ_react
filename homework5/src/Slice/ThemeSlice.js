import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name: "theme",
    initialState: {
        value: 'light',
    },
    reducers: {
        light: (state) => {
            state.value = 'light';
        },
        black: (state) => {
            state.value = 'dark';
        },
    },
});

export const { light, black } = themeSlice.actions;

export default themeSlice.reducer;
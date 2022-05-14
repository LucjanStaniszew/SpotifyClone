import { createSlice } from "@reduxjs/toolkit";

export const tokenSlice = createSlice({
    name: "token",
    initialState: {
        token: null
    },
    reducers: {
        SET_TOKEN: (state, action) => {
            state.token = action.payload
        }
    }
})

export const { SET_TOKEN } = tokenSlice.actions

export const selectToken = (state) => state.token.token

export default tokenSlice.reducer
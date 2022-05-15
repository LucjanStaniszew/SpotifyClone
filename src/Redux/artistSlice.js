import { createSlice } from "@reduxjs/toolkit";

export const artistSlice = createSlice({
    name: "artist",
    initialState: {
        artist: ""
    },
    reducers: {
        GET_ARTIST: (state, action) => {
            state.artist = action.payload
        }
    }
})

export const { GET_ARTIST } = artistSlice.actions

export default artistSlice.reducer;
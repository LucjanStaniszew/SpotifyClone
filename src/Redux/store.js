import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice.js';
import tokenReducer from './tokenSlice.js';

export default configureStore({
    reducer: {
        user: userReducer,
        token: tokenReducer,

    }
})
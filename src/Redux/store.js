import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from './reducer'

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)
/*
import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice.js';
import tokenReducer from './tokenSlice.js';

export default configureStore({
    reducer: {
        user: userReducer,
        token: tokenReducer,

    }
})*/
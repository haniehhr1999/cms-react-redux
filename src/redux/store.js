import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./users"
import courseReducer from "./courses"

const store = configureStore({
    reducer:{
        users : userReducer,
        courses : courseReducer,
    }
})
export default store
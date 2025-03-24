import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "./itemSlicer"
const store = configureStore({
    reducer:{
        items:itemReducer
    }
})

export default store 
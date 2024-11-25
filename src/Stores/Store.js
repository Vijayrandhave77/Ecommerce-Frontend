import { configureStore } from "@reduxjs/toolkit";
import BrowserCategeryCartSlice from "./BrowserCategeryCartSlice";
import ManAddToCart from "./ManAddToCart";


const Store = configureStore({
    reducer :{
        BrowserCart : BrowserCategeryCartSlice,
        ManAddToCart : ManAddToCart,

    }
})

export default Store
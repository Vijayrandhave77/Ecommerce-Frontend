import { createSlice } from "@reduxjs/toolkit";

let BrowserCategeryCartData = [
    {
        image : './bc1.webp',
        heading : "NEW ARRIVALS",
        paregraph : "Tincidunt nunc a mattis fames scelerisque fementum,",
        link : "Read More"
    },
    {
        image : './bc3.jpg',
        heading : "YOUNG MODEL",
        paregraph : "Tincidunt nunc a mattis fames scelerisque fementum,",
        link : "Read More"
    },
    {
        image : './bc2.jpg',
        heading : "MAN CASUAL",
        paregraph : "Tincidunt nunc a mattis fames scelerisque fementum,",
        link : "Read More"
    }
]

const BrowserCategeryCartSlice = createSlice({
    name: "browserCategory",
    initialState: {
        BrowserCategeryCaetData : BrowserCategeryCartData,
    },

    reducers:{

    }
})


export default BrowserCategeryCartSlice.reducer
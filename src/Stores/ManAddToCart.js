import { createSlice } from "@reduxjs/toolkit";

// const manCartData = [
//   {
//     id: 1,
//     img1: "./m1.webp",
//     img2: "./m11.webp",
//     name: "Eong leeve allover",
//     brand: "Basel",
//     price: 1200,
//     return: 15,
//     q: 1,
//   },
//   {
//     id: 2,
//     img1: "./m2.avif",
//     img2: "./m22.jpg",
//     name: "Basic Korean-style coat",
//     brand: "Basel",
//     price: 2190,
//     return: 15,
//     q: 1,
//   },
//   {
//     id: 3,
//     img1: "./m3.webp",
//     img2: "./m33.webp",
//     name: "Hooded jacquard jumper",
//     brand: "Basel",
//     price: 1200,
//     return: 15,
//     q: 1,
//   },
//   {
//     id: 4,
//     img1: "./m4.webp",
//     img2: "./m44.avif",
//     name: "Vessage and print t-shirt",
//     brand: "Basel",
//     price: 3990,
//     return: 15,
//     q: 1,
//   },
//   {
//     id: 5,
//     img1: "./m5.avif",
//     img2: "./m55.avif",
//     name: "Rentre zipper cloth coat",
//     brand: "Basel",
//     price: 4600,
//     return: 15,
//     q: 1,
//   },
//   {
//     id: 6,
//     img1: "./m6.avif",
//     img2: "./m66.avif",
//     name: "New t-shirt with side",
//     brand: "Basel",
//     price: 4120,
//     return: 15,
//     q: 1,
//   },
//   {
//     id: 7,
//     img1: "./m7.avif",
//     img2: "./m77.avif",
//     name: "Jhecked flannel shirt",
//     brand: "Basel",
//     price: 8920,
//     return: 15,
//     q: 1,
//   },
//   {
//     id: 8,
//     img1: "./m8.avif",
//     img2: "./m88.avif",
//     name: "Gleev checked shirt",
//     brand: "Basel",
//     price: 3570,
//     return: 15,
//     q: 1,
//   },
// ];

const ManCart = createSlice({
  name: "manCart",
  initialState: {
    manCartData: [],
    setData: [],
    addToBag: [],
    BegCount: 0,
    fee: 99,
    Des: [],
    search:[],
    searchCount:1,
    Token:""
  },

  reducers: {
    Add: (state, action) => {
      let dublicate = state.addToBag.find((dub) => dub._id == action.payload._id);
      if (dublicate) {
        // alert("Item aleready Added");
        state.Quantity = state.Quantity++;
      } else {
        state.addToBag = [...state.addToBag, action.payload];
        // state.addToBag.push(action.payload)
        localStorage.setItem("cartData", JSON.stringify(state.addToBag));
        state.BegCount++;
      }
    },

    Remove: (state, action) => {
      const getlocalData = localStorage.getItem("cartData");
      const finalLocalData = JSON.parse(getlocalData);

      let rem = finalLocalData.filter((r) => r._id !== action.payload._id);
      localStorage.setItem("cartData", JSON.stringify(rem));
      
      // only use for refress localStorege or nothing 
      state.setData = rem;
      // delete from addToBeg also
      state.addToBag = state.addToBag.filter(
        (del) => del._id !== action.payload._id
      );

      if (state.addToBag.length == 0) {
        state.BegCount = 0;
      } else {
        state.BegCount--;
      }
    },

    Inc: (state, action) => {
      // console.log(action.payload);
    },

    Dec: (state, action) => {},

    Des: (state, action) => {

localStorage.setItem("ItemDescription",JSON.stringify(action.payload))


      state.Des = action.payload;
    },
    COUNT:(state,action)=>{
      state.BegCount=action.payload
    },
    SEARCH:(state,action)=>{
      state.search=action.payload
    },
    SEARCHCOUNT:(state,action)=>{
      state.searchCount=action.payload
    },
    DTOKEN:(state,action)=>{
      state.Token=action.payload
    }
  },
});

export const { Add, Remove, Inc, Dec, Des,COUNT,SEARCH,SEARCHCOUNT,DTOKEN } = ManCart.actions;
export default ManCart.reducer;

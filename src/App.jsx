import "./App.css";
import Layout from "./Pages/Layout";
import MainPage from "./Pages/MainPage";
import AddToCart from "./Pages/AddToCart";
import {
  createBrowserRouter,
  createRoutesFromChildren,
  RouterProvider,
  Route,
} from "react-router-dom";
import ItemDiscription from "./Components/ItemDiscription";
import SearchProduct from "./Components/SearchProduct";
import WomenCategories from "./Pages/WomenCategories";
import ManCategories from "./Pages/ManCategories";
import WatchCategories from "./Pages/WatchCategories";
import BageCategories from "./Pages/BageCategories";
import ShoesCategories from "./Pages/ShoesCategories";
import JewelleryCategories from "./Pages/JewelleryCategories";
import AccessCategories from "./Pages/AccessCategories";
import ToyCategories from "./Pages/ToyCategories";
import SportsCategories from "./Pages/SportsCategories";
import HealthCategories from "./Pages/HealthCategories";
import Login from "./Pages/Login";
import Signin from "./Pages/Signin";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie'
function App() {
  let searchCount = useSelector((state) => state.ManAddToCart.searchCount);
  // const [token,setToken] = useState("")
  useEffect(()=>{
    const token = Cookies.get("vercel-feature-flags")
    console.log("token",token)
    // setToken(token)
  })
  // console.log("ye wala",token)
  const router = createBrowserRouter(
    createRoutesFromChildren(
      <Route path="/" element={<Layout />}>
        <Route
          path="/"
          element={searchCount <= 1 ? <MainPage /> : <SearchProduct />}
        />
        <Route path="/addtocart" element={<AddToCart />} />
        <Route path="/itemDisc" element={<ItemDiscription />} />
        <Route
          path="/WomenCategories"
          element={searchCount <= 1 ? <WomenCategories /> : <SearchProduct />}
        />
        <Route
          path="/ManCategories"
          element={searchCount <= 1 ? <ManCategories /> : <SearchProduct />}
        />
        <Route
          path="/WatchCategories"
          element={searchCount <= 1 ? <WatchCategories /> : <SearchProduct />}
        />
        <Route
          path="/BageCategories"
          element={searchCount <= 1 ? <BageCategories /> : <SearchProduct />}
        />
        <Route
          path="/ShoesCategories"
          element={searchCount <= 1 ? <ShoesCategories /> : <SearchProduct />}
        />
        <Route
          path="/JewelleryCategories"
          element={
            searchCount <= 1 ? <JewelleryCategories /> : <SearchProduct />
          }
        />
        <Route
          path="/AccessCategories"
          element={searchCount <= 1 ? <AccessCategories /> : <SearchProduct />}
        />
        <Route
          path="/ToyCategories"
          element={searchCount <= 1 ? <ToyCategories /> : <SearchProduct />}
        />
        <Route
          path="/SportsCategories"
          element={searchCount <= 1 ? <SportsCategories /> : <SearchProduct />}
        />
        <Route
          path="/HealthCategories"
          element={searchCount <= 1 ? <HealthCategories /> : <SearchProduct />}
        />
        <Route path="/signin" element={<Signin />} />
        <Route path="/login" element={<Login />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;

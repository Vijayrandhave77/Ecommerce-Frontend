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
  // let search = useSelector((state) => state.ManAddToCart.search);
  let searchCount = useSelector((state) => state.ManAddToCart.searchCount);
  console.log(searchCount)
  const [token,setToken] = useState("")
  useEffect(()=>{
    const token = Cookies.get("jwtToken")
    setToken(token)
  },[])
  const router = createBrowserRouter(
    createRoutesFromChildren(
      <Route path="/" element={<Layout />}>
        <Route
          path="/"
          element={searchCount <=1 ? <MainPage /> : <SearchProduct />}
        />
        <Route
          path="/addtocart"
          element={token? <AddToCart /> : <Login />}
        />
        <Route path="/itemDisc" element={<ItemDiscription />} />
        <Route
          path="/WomenCategories"
          element={token? searchCount <=1 ? <WomenCategories /> : <SearchProduct />:<Login />}
        />
        <Route
          path="/ManCategories"
          element={token? searchCount <=1 ? <ManCategories /> : <SearchProduct />:<Login />}
        />
        <Route
          path="/WatchCategories"
          element={token? searchCount <=1 ? <WatchCategories /> : <SearchProduct />:<Login />}
        />
        <Route
          path="/BageCategories"
          element={token? searchCount <=1 ? <BageCategories /> : <SearchProduct />:<Login />}
        />
        <Route
          path="/ShoesCategories"
          element={token? searchCount <=1 ? <ShoesCategories /> : <SearchProduct />:<Login />}
        />
        <Route
          path="/JewelleryCategories"
          element={
           token? searchCount <=1 ? <JewelleryCategories /> : <SearchProduct />:<Login />
          }
        />
        <Route
          path="/AccessCategories"
          element={
          token?  searchCount <=1 ? <AccessCategories /> : <SearchProduct />:<Login />
          }
        />
        <Route
          path="/ToyCategories"
          element={token? searchCount <=1 ? <ToyCategories /> : <SearchProduct />:<Login />}
        />
        <Route
          path="/SportsCategories"
          element={
           token? searchCount <=1 ? <SportsCategories /> : <SearchProduct /> :<Login />
          }
        />
        <Route
          path="/HealthCategories"
          element={
        token? searchCount <=1 ? <HealthCategories /> : <SearchProduct />
         :<Login />}
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

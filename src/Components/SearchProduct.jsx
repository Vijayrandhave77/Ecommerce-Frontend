// import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { PiShoppingCartSimple } from "react-icons/pi";
import { useSelector,useDispatch } from "react-redux";
import {Add,Des} from '../Stores/ManAddToCart'

function SearchProduct() {
  const dispatch = useDispatch()
  let search = useSelector((state) => state.ManAddToCart.search);
 
  return (
    <div className="searchPage">
      {search.map((item) => (
        <div className="man-cart-items" key={item._id}>
          <NavLink to="/itemDisc" onClick={()=>dispatch(Des(item))}>
            <img className="img1" src={item.img1} alt="Not Found" loading="lazy"/>
            <img className="img2" src={item.img2} alt="Not Found" loading="lazy"/>
          </NavLink>
          <div className="addtocart-section">
            <div className="cloth-name">
              <h2>{item.name}</h2>
            </div>
            <div className="band-name">
              <h2>{item.brand}</h2>
            </div>
            <div className="cloth-price">₹ {item.price}</div>
            <button className="mancartbtn" onClick={()=>dispatch(Add(item))}>
              <PiShoppingCartSimple className="mancartlogo" /> ADD TO CART
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SearchProduct;

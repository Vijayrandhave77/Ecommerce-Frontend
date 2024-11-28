import React from "react";
import { PiShoppingCartSimple } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import {Add,Des} from '../Stores/ManAddToCart'
import { NavLink } from "react-router-dom";
import axios from 'axios'
import { useEffect,useState } from "react";
import  Loaders from './Loaders'

function ManCategoriesCart() {

  const dispatch = useDispatch()

  const [McartData,setMcartData] = useState([]);

  useEffect(()=>{
    axios.get('https://ecommerce-backend-fpas.onrender.com/api/mandata')
    .then((response)=>{
      setMcartData(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  },[])
  // const McartData = useSelector((state) => state.ManAddToCart.manCartData);
  return (
    <div className="man-categories-cart">
   {
    McartData.length==0?<Loaders></Loaders>: <div>
        {McartData.map((Mcart) => (
        <div className="man-cart-items" key={Mcart._id}>
          <NavLink to="/itemDisc" onClick={()=>dispatch(Des(Mcart))}>
            <img className="img1" src={Mcart.img1} alt="Not Found" loading="lazy" />
            <img className="img2" src={Mcart.img2} alt="Not Found" loading="lazy" />
          </NavLink>
          <div className="addtocart-section">
            <div className="cloth-name">
              <h2>{Mcart.name}</h2>
            </div>
            <div className="band-name">
              <h2>{Mcart.brand}</h2>
            </div>
            <div className="cloth-price">₹ {Mcart.price}</div>
            <button className="mancartbtn" onClick={()=>dispatch(Add(Mcart))}>
              <PiShoppingCartSimple className="mancartlogo" /> ADD TO CART
            </button>
          </div>
        </div>
      ))}
   </div>

   } 
  
 
    
      
    </div>
  );
}

export default ManCategoriesCart;

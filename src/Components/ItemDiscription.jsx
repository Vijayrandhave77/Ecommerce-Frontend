import React, { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import {Add,Des} from '../Stores/ManAddToCart'


function ItemDiscription() {
  const dispatch = useDispatch()
  const DesData = useSelector((state) => state.ManAddToCart.Des);
  const manCartData = useSelector((state) => state.ManAddToCart.manCartData);
  const [itemDes,setItemDes] = useState([])
  useEffect(()=>{
  let desData =  localStorage.getItem("ItemDescription")
  const fdata = JSON.parse(desData);
  setItemDes(fdata) 
  },[])


  return (
    <>
      <div className="item-description">
        <div className="imagedesSection">
          <div className="imgdesleft">
            <img src={itemDes.img1} alt="image" className="imgdes" loading="lazy" />
            <img src={itemDes.img2} alt="" className="imgdes" loading="lazy" />
          </div>
          <div className="imgdesright">
            <img src={itemDes.img1} alt="" className="imgdes3"  loading="lazy" />
          </div>
        </div>

        <div className="discriptionSection">
          <h1>{itemDes.name}</h1>
          <p>{itemDes.brand}</p>
          <p>₹ {itemDes.price}</p>

          <p>
            Viverra a consectetur Enim in malesuada fusce dolor mi massa leo
            taciti nulla vestibulum dignissim senectus vitae elit ullamcorper
            primis. Facilisis scelerisque mi Amet quisque adipiscing scelerisque
            vestibulum a parturient aptent...
          </p>
          <button className="desbtncart" onClick={()=>dispatch(Add(itemDes))}>ADD TO CART</button>
          <button className="desbtnbuy">BUY IT NOW</button>
        </div>
      </div>
    </>
  );
}

export default ItemDiscription;

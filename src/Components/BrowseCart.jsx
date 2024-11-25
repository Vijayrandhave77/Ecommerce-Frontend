import React from "react";
import { useSelector } from "react-redux";

function BrowseCart() {
  
  const browCart = useSelector(
    (state) => state.BrowserCart.BrowserCategeryCaetData
  );

  return (
    <div className="browser-cart">
      {
      browCart.map((Bcart) => (
        <div className="browser-cart-img" key={Bcart.heading}>
          <a href="">
            <img src={Bcart.image} alt="" loading="lazy"/>
          </a>

          <div className="browser-cart-slogan">
            <h1>{Bcart.heading}</h1>
            <p>Tincidunt nunc a mattis fames scelerisque fementum,</p>
            <a href="">Read More</a>
          </div>
        </div>
      ))
      }
    </div>
  );
}

export default BrowseCart;

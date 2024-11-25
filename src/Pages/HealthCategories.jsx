import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { PiShoppingCartSimple } from "react-icons/pi";
import { RiMenuAddLine } from "react-icons/ri";

function HealthCategories() {
    const [filter, setFilter] = useState("filterHide");
    const toggleFilter = () => {
      if (filter == "filterHide") {
        setFilter("filterShow");
      } else {
        setFilter("filterHide");
      }
    };
  return (
    <div className="WomenCategories">
      <div className="womenNavbar">
        <p>Showing all {10} result</p>{" "}
        <button onClick={toggleFilter}>
          Filter <RiMenuAddLine />
        </button>
      </div>
      <div className={`filter-options ${filter}`}>
        <ul>
          <h3>SORT BY</h3>
          <li>Featured</li>
          <li>Best Selling</li>
          <li>Alphabetically, A-Z</li>
          <li>Alphabetically, Z-A</li>
          <li>Price low to high</li>
          <li>Price high to low</li>
        </ul>

        <ul>
          <h3>FILTER BY COLOR</h3>
          <div className="colorbox-container">
            <div className="colorbox" style={{backgroundColor:"blue"}}></div> <li>Blue</li>
          </div>
          <div className="colorbox-container">
            <div className="colorbox" style={{backgroundColor:"white"}}></div> <li>White</li>
          </div>
          <div className="colorbox-container">
            <div className="colorbox" style={{backgroundColor:"red"}}></div> <li>Red</li>
          </div>
          <div className="colorbox-container">
            <div className="colorbox" style={{backgroundColor:"black"}}></div> <li>Black</li>
          </div>

          <div className="colorbox-container">
            <div className="colorbox" style={{backgroundColor:"yellow"}}></div> <li>Yellow</li>
          </div>
          <div className="colorbox-container">
            <div className="colorbox" style={{backgroundColor:"green"}}></div> <li>Green</li>
          </div>
        </ul>

      </div>
      <div className="WomenCategoriesContainer">
        <div className="man-cart-items">
          <NavLink to="/itemDisc">
            <img className="img1" src="./m1.webp" alt="Not Found" loading="lazy" />
            <img className="img2" src="m2.avif" alt="Not Found" loading="lazy" />
          </NavLink>
          <div className="addtocart-section">
            <div className="cloth-name">
              <h2>{}</h2>
            </div>
            <div className="band-name">
              <h2>{}</h2>
            </div>
            <div className="cloth-price">₹ {}</div>
            <button className="mancartbtn">
              <PiShoppingCartSimple className="mancartlogo" /> ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HealthCategories

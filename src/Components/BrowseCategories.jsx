import React from "react";
import { GrRestroomWomen } from "react-icons/gr";
import { FaMale } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
import { TbShoppingBagEdit } from "react-icons/tb";
import { IoCart } from "react-icons/io5";
import { IoDiamond } from "react-icons/io5";
import { IoStar } from "react-icons/io5";
import { MdOutlineSportsSoccer } from "react-icons/md";
import { MdHealthAndSafety } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";

function BrowseCategories() {
  return (
    <div className="Browser-caterores">
      <div className="categery-heading">
        <h3>BROWSE CATEGORIES</h3>
      </div>
      <ul>
        <li>
          <NavLink to="/WomenCategories">
            <GrRestroomWomen className="browse-icons" /> WOMEN'S CLOTHINGS{" "}
            <IoIosArrowForward className="browsearrow arrowwomen"/>
          </NavLink>
        </li>
        <li>
          <NavLink to="/ManCategories">
            <FaMale className="browse-icons" /> MEN'S CLOTHINGS
            <IoIosArrowForward className="browsearrow arrowmen"/>
          </NavLink>
        </li>
        <li>
          <NavLink to="/WatchCategories">
            <MdOutlineWatchLater className="browse-icons" /> WATCHES
          </NavLink>
        </li>
        <li>
          <NavLink to="/BageCategories">
            <TbShoppingBagEdit className="browse-icons" /> BAGE & SHOES
            <IoIosArrowForward className="browsearrow arrowbag"/>
          </NavLink>
        </li>
        <li>
          <NavLink to="/ShoesCategories">
            <IoCart className="browse-icons" /> SHOES
          </NavLink>
        </li>
        <li>
          <NavLink to="/JewelleryCategories">
            <IoDiamond className="browse-icons" /> JEWELLERY
          </NavLink>
        </li>
        <li>
          <NavLink to="/AccessCategories">
            <IoStar className="browse-icons" /> ACCESSORIES
          </NavLink>
        </li>
        <li>
          <NavLink to="/ToyCategories">
            <FaMale className="browse-icons" /> TOYS,KIDS & BABY
          </NavLink>
        </li>
        <li>
          <NavLink to="/SportsCategories">
            <MdOutlineSportsSoccer className="browse-icons" /> SPORTS & OUTDOORS
          </NavLink>
        </li>
        <li>
          <NavLink to="/HealthCategories">
            <MdHealthAndSafety className="browse-icons" /> HEALTH & BEAUTY
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default BrowseCategories;

import { useState,useEffect} from "react";
import { IoIosArrowDown } from "react-icons/io";
import { PiShoppingCartSimple } from "react-icons/pi";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios'
import Cookies from 'js-cookie'
import { SEARCH,SEARCHCOUNT } from "../Stores/ManAddToCart";
import Islogin from "./Islogin";
import Islogout from "./Islogout";

function Header() {
  const dispatch = useDispatch();

  const BegCount = useSelector((state) => state.ManAddToCart.BegCount);

const [searchData,setSearchData] = useState([])
const [search, setSearch] = useState("");

const searchfilter = searchData.filter((sf) =>
  sf.name.toLowerCase().includes(search.toLowerCase())
);

  const Searchhandler = (e)=>{
    setSearch(e.target.value);
    dispatch(SEARCH(searchfilter))
    dispatch(SEARCHCOUNT(search.length))
  }
useEffect(() => {
  axios.get("https://ecommerce-backend-fpas.onrender.com/api/searchdata")
    .then((response) => {
      setSearchData(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}, []);
 

 
   

  const [token,setToken] = useState("")
  useEffect(()=>{
    const token = Cookies.get("jwtToken")
    setToken(token)
  },[])

  return (
    <div className="header">
      <div className="logo">𝕍ℝ77</div>

      <div className="navbar">
        <ul>
          <img src="./sale1.png" alt="" className="saleimg" loading="lazy" />
          <li>
            <NavLink to="/">HOME</NavLink>
          </li>
          <li id="hoverwoman">
            <a href="">WOMEN </a>
            <div className="womanHoverSection">
              <ul>
                <h4>SHOP STYLES</h4>
                <li>Quick shop product</li>
                <li>Masonory Grid</li>
                <li>Default style</li>
                <li>Alternative Shop</li>
                <li>Button on hover</li>
                <li>Button hover alt</li>
                <li>Hover info</li>
                <li>Standard button</li>
                <li>Full width</li>
              </ul>

              <ul>
                <h4>PRODUCTS PAGES</h4>
                <li>Quick shop product</li>
                <li>Masonory Grid</li>
                <li>Default style</li>
                <li>Alternative Shop</li>
                <li>Button on hover</li>
                <li>Button hover alt</li>
                <li>Hover info</li>
                <li>Standard button</li>
                <li>Full width</li>
              </ul>
              <ul>
                <h4>PRODUCTS FEATURES</h4>
                <li>Quick shop product</li>
                <li>Masonory Grid</li>
                <li>Default style</li>
                <li>Alternative Shop</li>
                <li>Button on hover</li>
                <li>Button hover alt</li>
                <li>Hover info</li>
                <li>Standard button</li>
                <li>Full width</li>
              </ul>
              <ul>
                <h4>SHOP PAGES</h4>
                <li>Quick shop product</li>
                <li>Masonory Grid</li>
                <li>Default style</li>
                <li>Alternative Shop</li>
                <li>Button on hover</li>
                <li>Button hover alt</li>
                <li>Hover info</li>
                <li>Standard button</li>
                <li>Full width</li>
              </ul>
            </div>
            <IoIosArrowDown style={{ fontSize: "10px" }} />{" "}
          </li>
          <li id="hoverkid">
            <a href="">KIDS </a>
            <div className="kidsHoverSection">
              <ul>
                <h4>Bed Linen & Furnishing</h4>
                <li>Bed Runners</li>
                <li>Mattress Protectors</li>
                <li>Bedding Sets</li>
                <li>Blankets, Quilts & Dohars</li>
                <li>Pillows & covers</li>
                <li>Bed covers</li>
                <li>Diwan sets</li>
                <li>Chair Pads & covers</li>
                <li>Sofa covers</li>
              </ul>

              <ul>
                <h4>Bath</h4>
                <li>Bath Towels</li>
                <li>Hand & Face Towels</li>
                <li>Beach Towels</li>
                <li>Towels set</li>
                <li>Bath Ruges</li>
                <li>Bath Robes</li>
                <li>Bathroom Accessories</li>
                <li>Shower curtains</li>
                <li>Floor Lamps</li>
              </ul>
              <ul>
                <h4>Home Decore</h4>
                <li>Vase</li>
                <li>Coffee Table</li>
                <li>Floor Lamp</li>
                <li>Wall Art</li>
                <li>Rug</li>
                <li>Sofa</li>
                <li>Dining Table</li>
                <li>TV Stand</li>
                <li>Bookshelf</li>
                {/* <li>Desk</li> */}
              </ul>
              <ul>
                <h4>Top Brands</h4>
                <li>Mora Taara Vase</li>
                <li>Baaya Design Coffee Table</li>
                <li>Chumbak Floor Lamp</li>
                <li>The White Teak Company Wall Art</li>
                <li>Home Artisan Rug</li>
                <li>The Label Life Sofa</li>
                <li>Good Earth Dining Table</li>
                <li>Gulmohar Lane TV Stand</li>
                <li>Jaypore Bookshelf</li>
                {/* <li>Nicobar Desk</li> */}
              </ul>
            </div>
            <IoIosArrowDown style={{ fontSize: "10px" }} />
          </li>
          <li id="hoverhome">
            <a href="">HOME & LIVINGS </a>
            <div className="homeHoverSection">
              <ul>
                <h4>Bed Linen & Furnishing</h4>
                <li>Bed Runners</li>
                <li>Mattress Protectors</li>
                <li>Bedding Sets</li>
                <li>Blankets, Quilts & Dohars</li>
                <li>Pillows & covers</li>
                <li>Bed covers</li>
                <li>Diwan sets</li>
                <li>Chair Pads & covers</li>
                <li>Sofa covers</li>
              </ul>

              <ul>
                <h4>Bath</h4>
                <li>Bath Towels</li>
                <li>Hand & Face Towels</li>
                <li>Beach Towels</li>
                <li>Towels set</li>
                <li>Bath Ruges</li>
                <li>Bath Robes</li>
                <li>Bathroom Accessories</li>
                <li>Shower curtains</li>
                <li>Floor Lamps</li>
              </ul>
              <ul>
                <h4>Home Decore</h4>
                <li>Vase</li>
                <li>Coffee Table</li>
                <li>Floor Lamp</li>
                <li>Wall Art</li>
                <li>Rug</li>
                <li>Sofa</li>
                <li>Dining Table</li>
                <li>TV Stand</li>
                <li>Bookshelf</li>
              </ul>
              <ul>
                <h4>Top Brands</h4>
                <li>Mora Taara Vase</li>
                <li>Baaya Design Coffee Table</li>
                <li>Chumbak Floor Lamp</li>
                <li>The White Teak Company Wall Art</li>
                <li>Home Artisan Rug</li>
                <li>The Label Life Sofa</li>
                <li>Good Earth Dining Table</li>
                <li>Gulmohar Lane TV Stand</li>
                <li>Jaypore Bookshelf</li>
              </ul>
            </div>
            <IoIosArrowDown style={{ fontSize: "10px" }} />
          </li>
          <li id="hoverbeauty">
            <a href="">
              <div className="beautyHoverSection">
                <ul>
                  <h4>Makeup</h4>
                  <li>LipStick</li>
                  <li>Lip Gloss</li>
                  <li>Lip Liner</li>
                  <li>Mascara</li>
                  <li>Kajal</li>
                  <li>Eyeliner</li>
                  <li>Foundation</li>
                  <li>Primer</li>
                  <li>Concealer</li>
                </ul>

                <ul>
                  <h4>Skincare, Bath & Body</h4>
                  <li>Face Moisturiser</li>
                  <li>Cleanser</li>
                  <li>Masks & Peel</li>
                  <li>Sunsscreen</li>
                  <li>Serum</li>
                  <li>Face Wash</li>
                  <li>Eye Cream</li>
                  <li>Lip Balm</li>
                  <li>Body Wash</li>
                </ul>
                <ul>
                  <h4>Haircare</h4>
                  <li>Shampoo</li>
                  <li>Conditioner</li>
                  <li>Hair cream</li>
                  <li>Hair Gel</li>
                  <li>Hair Oil</li>
                  <li>Hair Color</li>
                  <li>Hair Serum</li>
                  <li>Hair Accessory</li>
                  <li>perfume</li>
                </ul>
                <ul>
                  <h4>Top Brands</h4>
                  <li>Lakme</li>
                  <li>Maybelline</li>
                  <li>LOreal</li>
                  <li>Philips</li>
                  <li>BNath & Body Works</li>
                  <li>The Body Shop</li>
                  <li>Nivea</li>
                  <li>Lotus Herbals</li>
                  <li>Forest Essential</li>
                </ul>
              </div>
              <IoIosNotificationsOutline />
              BEAUTY{" "}
            </a>
            <IoIosArrowDown style={{ fontSize: "10px" }} />
          </li>
        </ul>
      </div>

      <div className="search-cart-box">
        <div className="searchbar">
          <input
            type="search"
            className="search"
            placeholder="Search for Products, Brands and More"
            onChange={(e) => Searchhandler(e)}
          />
          <IoSearchOutline
            className="searchicon"
            // onClick={() => dispatch(SEARCH(searchFilter))}
          />
        </div>
    {
      !token?<Islogin/>:<Islogout/>
    }
        

        <div className="cart">
          <NavLink to="/addtocart">
            {" "}
            <PiShoppingCartSimple className="cartlogo" />
            <div className="cartcount">{BegCount}</div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Header;

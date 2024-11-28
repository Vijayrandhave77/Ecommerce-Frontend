import { NavLink } from "react-router-dom";
import { PiShoppingCartSimple } from "react-icons/pi";
import { RiMenuAddLine } from "react-icons/ri";
import Loaders from "../Components/Loaders";
import { useEffect, useState } from "react";
import { Add, Des } from "../Stores/ManAddToCart";
import { useDispatch } from "react-redux";
import axios from "axios";

function WomenCategories() {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("filterHide");
  const toggleFilter = () => {
    if (filter == "filterHide") {
      setFilter("filterShow");
    } else {
      setFilter("filterHide");
    }
  };
  const size = ["L", "M", "S", "XS", "XL"];
  const colors = ["Blue", "White", "Red", "Black", "Yellow", "Green"];
  const sorts = [
    "Featured",
    "Best Selling",
    "Alphabetically, A-Z",
    "Alphabetically, Z-A",
    "Price low to high",
    "Price high to low",
  ];

  const [womanData, setWomanData] = useState([]);
  const [sizeFilter, setSizeFilter] = useState();
  const [colorFilter, setColorFilter] = useState();
  const [sortFilter, setSortFilter] = useState([]);

  useEffect(() => {
    axios
      .get("https://ecommerce-backend-fpas.onrender.com/api/womandata")
      .then((response) => {
        setSizeFilter(response.data);
        setColorFilter(response.data);
        setSortFilter(response.data);
        setWomanData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="WomenCategories">
      <div className="womenNavbar">
        <p>Showing all {womanData.length} result</p>{" "}
        <button onClick={toggleFilter}>
          Filter <RiMenuAddLine />
        </button>
      </div>
      <div className={`filter-options ${filter}`}>
        <ul>
          <h3>SORT BY</h3>
          {sorts.map((so, idx) => (
            <li
              key={idx}
              onClick={() => {
                if (so === "Price low to high") {
                  let vsort = sortFilter.sort((a, b) => a.price - b.price);
                  setWomanData(vsort);
                } else if (so === "Price high to low") {
                  let isort = sortFilter.sort((a, b) => a.price + b.price);
                  setWomanData(isort);
                }
              }}
            >
              {so}
            </li>
          ))}
        </ul>

        <ul>
          <h3>FILTER BY COLOR</h3>
          {colors.map((color, index) => (
            <div className="colorbox-container" key={index}>
              <div
                className="colorbox"
                style={{ backgroundColor: color }}
              ></div>{" "}
              <li
                onClick={() => {
                  let fcolor = colorFilter.filter(
                    (f) => f.color === color.toLowerCase()
                  );
                  setWomanData(fcolor);
                }}
              >
                {color}
              </li>
            </div>
          ))}
        </ul>

        <ul>
          <h3>FILTER BY SIZE</h3>
          {size.map((s, index) => (
            <button
              key={index}
              onClick={() => {
                let size = sizeFilter.filter((fsize) => fsize.size === s);
                setWomanData(size);
              }}
            >
              {s}
            </button>
          ))}
        </ul>
      </div>

{womanData.length == 0 ? <Loaders></Loaders>:<div className="WomenCategoriesContainer">
          {womanData.map((data) => (
            <div className="man-cart-items" key={data._id}>
              <NavLink to="/itemDisc" onClick={() => dispatch(Des(data))}>
                <img
                  className="img1"
                  src={data.img1}
                  alt="Not Found"
                  loading="lazy"
                />
                <img
                  className="img2"
                  src={data.img2}
                  alt="Not Found"
                  loading="lazy"
                />
              </NavLink>
              <div className="addtocart-section">
                <div className="cloth-name">
                  <h2>{data.name}</h2>
                </div>
                <div className="band-name">
                  <h2>{data.brand}</h2>
                </div>
                <div className="cloth-price">₹ {data.price}</div>
                <button
                  className="mancartbtn"
                  onClick={() => dispatch(Add(data))}
                >
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

export default WomenCategories;

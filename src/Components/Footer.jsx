import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { MdOutlineSmartphone } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa6";
function Footer() {
  return (
    <footer className="footer">
      <div className="sociallogo">
        <ul>
          <li>
            <a href="">
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a href="">
              <BsTwitterX />
            </a>
          </li>
          <li>
            <a href="">
              <IoMdMail />
            </a>
          </li>
        </ul>
      </div>

      <div className="links">
        <div className="heading">
          <div className="tittle">OUR STORES</div>
          <div className="line"></div>
          <ul>
            <li>
              <a href="">New York</a>
            </li>
            <li>
              <a href="">London SF</a>
            </li>
            <li>
              <a href="">Cockfosters BP</a>
            </li>
            <li>
              <a href="">Los Angeles</a>
            </li>
            <li>
              <a href="">Chicago</a>
            </li>
            <li>
              <a href="">Las Vegas</a>
            </li>
          </ul>
        </div>
        <div className="heading">
          <div className="tittle">INFORMATION</div>
          <div className="line"></div>
          <ul>
            <li>
              <a href="">About Store</a>
            </li>
            <li>
              <a href="">New Collection</a>
            </li>
            <li>
              <a href="">Womman Dress</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
            <li>
              <a href="">Latest News</a>
            </li>
            <li>
              <a href="">Our Sitemap</a>
            </li>
          </ul>
        </div>
        <div className="heading">
          <div className="tittle">USEFUL LINKS</div>
          <div className="line"></div>
          <ul>
            <li>
              <a href="">Privacy Policy</a>
            </li>
            <li>
              <a href="">Returns</a>
            </li>
            <li>
              <a href="">Terms & Conditions</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
            <li>
              <a href="">Latest News</a>
            </li>
            <li>
              <a href="">Our Sitemap</a>
            </li>
          </ul>
        </div>
        <div className="heading">
          <div className="tittle">FOOTER MENU</div>
          <div className="line"></div>
          <ul>
            <li>
              <a href="">Instagram Profile</a>
            </li>
            <li>
              <a href="">New Collections</a>
            </li>
            <li>
              <a href="">Woman Dress</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
            <li>
              <a href="">Latest News</a>
            </li>
            <li>
              <a href="" style={{ color: "white" }}>
                Purchase Theme
              </a>
            </li>
          </ul>
        </div>
        <div className="heading">
          <div className="tittle">ABOUT THE STORE</div>
          <div className="line"></div>
          <div className="paragraph">
            <p>
              STORE - worldwide fashion store since 1978. We sell over 1000+
              branded products on our web-site.
            </p>
          </div>

          <div className="details">
            <p><FaLocationArrow /> Bicholi mardana Indore - 452016</p>
            <p><MdOutlineSmartphone /> Phone: 8103292287</p>
          </div>

    <div className="payments-icons">
    <img src="./card1.png" alt=""  loading="lazy" />
    <img src="./card2.png" alt=""  loading="lazy" />
    <img src="./card3.png" alt=""  loading="lazy" />
    <img src="./card4.png" alt=""  loading="lazy" />
    <img src="./card5.png" alt=""  style={{height:"35px"}} loading="lazy" />
    </div>




        </div>
      </div>
    </footer>
  );
}

export default Footer;

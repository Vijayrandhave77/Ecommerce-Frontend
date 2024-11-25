import React from "react";
import { NavLink } from "react-router-dom";
// import Cookies from "js-cookie"
function Islogout() {
  // onClick={()=>{Cookies.remove('jwtToken')}}
  return (
    <div className="logout">
      <div className="account">
        <button >
          <NavLink to="/login">LogOut</NavLink>
        </button>
      </div>
    </div>
  );
}

export default Islogout;

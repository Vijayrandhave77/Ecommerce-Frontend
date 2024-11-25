import React from "react";
import { NavLink } from "react-router-dom";
import Cookies from "js-cookie"
function Islogout() {

  return (
    <div className="logout">
      <div className="account">
        <button onClick={()=>{Cookies.remove('jwtToken')}}>
          <NavLink to="/login">LogOut</NavLink>
        </button>
      </div>
    </div>
  );
}

export default Islogout;

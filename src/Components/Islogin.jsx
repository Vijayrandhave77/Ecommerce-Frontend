import React from "react";
import { NavLink } from "react-router-dom";

function Islogin() {
  return (
    <div className="isLogin">
      <div className="account">
        <button>
          <NavLink to="/signin">SignIn</NavLink>
        </button>
      </div>
      <div className="account">
        <button>
          <NavLink to="/login">Login</NavLink>
        </button>
      </div>
    </div>
  );
}

export default Islogin;

import React from "react";
import { MdEmail } from "react-icons/md";

function EmailSection() {
  return (
    <div className="email-section">
      <div className="innerboxEmail">
        <div className="dis">
          <h1>Our Newsletter</h1>
          <p>
            It only takes a second to be the first to find out about our latest
            news and promotionsâ¦
          </p>
        </div>
        <div className="email-form">
          <form action="">
            <div className="emailbox">
              <MdEmail />{" "}
              <input
                className="formemail"
                type="email"
                placeholder="Enter your email address"
              />
            </div>

            <button type="submit" className="signup">
              SIGN UP
            </button>
          </form>
        </div>

        <div className="emaillogo">
          <div className="logo"></div>
          <div className="logo"></div>
          <div className="logo"></div>
        </div>
      </div>
    </div>
  );
}

export default EmailSection;

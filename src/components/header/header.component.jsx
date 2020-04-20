import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";

// import { ReactComponent as Logo } from "../../assets/crown.svg";

const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/">
      <img
        src="data:image/png;base64,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"
        alt=""
      />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      <Link className="option" to="/signin">
        SIGN IN
      </Link>
    </div>
  </div>
);

export default Header;

import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import "./cart-icon.styles.scss";

const CartIcon = () => (
  <div className="cart-icon">
    <FaShoppingCart className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

export default CartIcon;

import React from 'react';
import icon from "./cart-icon.svg";
import "./CartButton.css"
function CartButton() {
  return (
    <div className="CartButton">
      <img src={icon} alt="cart button" className="CartButton-image"></img>
    </div>
  );
}

export default CartButton;
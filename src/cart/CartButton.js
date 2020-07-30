import React from 'react';
import icon from "./cart-icon.svg";
function CartButton() {
  return (
    <div className="CartButton">
      <img src={icon} alt="cart button"></img>
    </div>
  );
}

export default CartButton;
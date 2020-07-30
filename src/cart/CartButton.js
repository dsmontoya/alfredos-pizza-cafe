import React from 'react';
import icon from "./cart-icon.svg";
import "./CartButton.css"
function CartButton(props) {
  return (
    <div className="CartButton">
      <div className="CartButton-counter">
        {props.numberOfProducts}
      </div>
      <img src={icon} alt="cart button" className="CartButton-image"></img>
    </div>
  );
}

export default CartButton;
import React from 'react';
import icon from "./cart-icon.svg";
import "./CartButton.css"
function CartButton(props) {
  return (
    <div className="CartButton">
      <Counter value={props.numberOfProducts}/>
      <img src={icon} alt="cart button" className="CartButton-image"></img>
    </div>
  );
}

function Counter(props) {
  const value = props.value
  if (value > 0) {
    return (
      <div className="CartButton-counter">
        {value}
      </div>
    )
  }
  return null
}

export default CartButton;
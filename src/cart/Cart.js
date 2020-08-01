import React, {useEffect, useState} from 'react';
import ProductList from '../products/ProductList';
import "./Cart.css"

function Cart(props) {
  const products = props.products;
  
  var content = (products.length > 0 ? <ProductList display={"inline"} onAddToCart={props.onAddToCart} onRemove={props.onRemove} products={products}/>:<EmptyCart/>);
    
  return (
    <div className="Container">
     {content}
    </div>
  );
}

function EmptyCart() {
  return (
    <div className="Message--state-error">
      Your cart is empty!
    </div>
  )
}

function PurchaseButton(props) {
  if (props.total > 0) {
    return(
      <button>Check out (${props.total})</button>
    )
  }
  return null
}

export default Cart;
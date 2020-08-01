import React, {useEffect, useState} from 'react';
import ProductList from '../products/ProductList';
import "./Cart.css"

function Cart(props) {
  const products = props.products;
  
  var content = (products.length > 0 ? <ProductList display={"inline"} onAddToCart={props.onAddToCart} onRemove={props.onRemove} products={products}/>:<EmptyCart/>);

  function total() {
    let total = 0;
    products.forEach(product => {
      let {amount, price} = product;
      total += amount * price;
    });
    return total;
  }
    
  return (
    <div className="Cart">
      <h2>Cart</h2>
     {content}
     <PurchaseButton total={total()} onClick={props.onPurchase}/>
    </div>
  );
}

function EmptyCart() {
  return (
    <div className="Message Message--state-error">
      Your cart is empty!
    </div>
  )
}

function PurchaseButton(props) {
  if (props.total > 0) {
    return(
      <div className='Cart-purchase'>
        <button className='Cart-purchase__button' onClick={props.onClick}>Check out (${props.total})</button>
      </div>
    )
  }
  return null
}

export default Cart;
import React from 'react';
import ProductList from '../products/ProductList';

function Cart(props) {
  return (
    <div className="Container">
      <ProductList display={"inline"} products={props.products}/>
    </div>
  );
}

export default Cart;
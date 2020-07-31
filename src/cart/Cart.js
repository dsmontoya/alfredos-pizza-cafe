import React from 'react';
import ProductList from '../products/ProductList';
import "./Cart.css"

function Cart(props) {
  const products = props.products.slice();
  const content = (products.length > 0 ? <ProductList display={"inline"} products={groupProductsByID()}/>:<EmptyCart/>);

  function groupProductsByID() {
    let groupedProducts = [];
    let hash = {};
    products.forEach(function(product) {
      const id = product.id
      if (!(id in hash)) {
        product.amount = 1;
        hash[id] = groupedProducts.length;
        groupedProducts.push(product);
      } else {
        const idx = hash[id]
        groupedProducts[idx].amount++
      }
    });
    return groupedProducts;
  }
  
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

export default Cart;
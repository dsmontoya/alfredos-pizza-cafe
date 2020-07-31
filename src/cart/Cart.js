import React, {useEffect, useState} from 'react';
import ProductList from '../products/ProductList';
import "./Cart.css"

function Cart(props) {
  const products = props.products.slice();
  var cartInfo = getCartInfo();
  const [groupedProducts, setGroupedProducts] = useState(cartInfo.products);
  var content = (products.length > 0 ? <ProductList display={"inline"} products={groupedProducts}/>:<EmptyCart/>);
  
  function getCartInfo() {
    let gp = [];
    let hash = {};
    products.forEach(function(product) {
      const id = product.id
      if (!(id in hash)) {
        product.amount = 1;
        hash[id] = gp.length;
        gp.push(product);
      } else {
          const idx = hash[id]
          gp[idx].amount++
        }
    });
    console.log("gp",gp);
    return {products: gp}
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

function PurchaseButton(props) {
  if (props.total > 0) {
    return(
      <button>Check out (${props.total})</button>
    )
  }
  return null
}

export default Cart;
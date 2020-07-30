import React from 'react';
import './Product.css';

function Product(props) {
  const product = props.product;
  const display = props.display;
  return (
    <li className={"Product Product--display-"+display}>
      <img className={"Product-image--display-"+display} src={product.image} alt={product.name}/>

        <h2 className={"Product-name--display-"+display}>{product.name}</h2>
      <div className={"Product-price--display-"+display}>
        ${product.price}
      </div>
      <div className={"Product-description--display-"+display}>
        {product.description}
      </div>
      <AmountControls display={display} onAddToCart={() => props.onAddToCart(product)} />
    </li>
  );
}

function AmountControls(props) {
  if (props.display === "block") {
    return (
      <div className="Product-addToCart">
        <button className="Product-addToCart__button" onClick={props.onAddToCart}>Add To Cart</button>
      </div>
    )
  } else if (props.display === "inline") {
    return (
      <div className="Product-amountControls">
        <button>-</button>
        <span>1</span>
        <button>+</button>
      </div>
    )
  }
  return null
}

export default Product;
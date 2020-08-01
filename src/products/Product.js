import React from 'react';
import './Product.css';

function Product(props) {
  const product = props.product;
  const display = props.display;
  return (
    <li className={"Product Product--display-"+display}>
      <img className={"Product-image--display-"+display} src={product.image} alt={product.name}/>
      <div className={"Product-info--display-"+display}>
        <h2 className={"Product-name--display-"+display}>{product.name}</h2>
      <div className={"Product-price--display-"+display}>
        ${product.price}
      </div>
      <div className={"Product-description--display-"+display}>
        {product.description}
      </div>
      </div>
      <AmountControls amount={product.amount} display={display} onAddToCart={() => props.onAddToCart(product)} onRemove={() => props.onRemove(product.id)} />

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
        <button className="Product-amountControls__button" onClick={props.onRemove}>-</button>
        <span className="Product-amountControls__span">{props.amount}</span>
        <button className="Product-amountControls__button" onClick={props.onAddToCart}>+</button>
      </div>
    )
  }
  return null
}

export default Product;
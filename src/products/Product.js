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
      <div className="Product-addToCart">
        <button className="Product-addToCart__button" onClick={() => props.onAddToCart(product.id)}>Add To Cart</button>
      </div>
    </li>
  );
}

export default Product;
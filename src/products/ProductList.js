import React from 'react';
import './ProductList.css';
import Product from './Product'

function ProductList(props) {
  const products = props.products;
  const productList = products.map((product) =>
    <Product key={product.id} product={product} display={props.display} onAddToCart={props.onAddToCart}/>
  );
  return (
    <ul className={"ProductList--display-"+props.display}>
      <div className="col-3"></div>
      {productList}
      <div className="col-3"></div>
    </ul>
  );
}

export default ProductList;
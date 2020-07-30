import React from 'react';
import ProductList from '../products/ProductList';
function Home(props) {
  return (
    <div className="Container">
      <ProductList products={props.products} display={"block"} />
    </div>
  );
}

export default Home;
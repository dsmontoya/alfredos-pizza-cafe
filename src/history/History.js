import React from 'react';
import ProductList from '../products/ProductList';
import './History.css'

function History(props) {
  const orders = props.orders;
  const content = (orders.length > 0 ? <OrderHistory orders={orders}/> : <EmptyHistory />)
  return (
    <div className="History">
      <h2>Order History</h2>
      <div>
        {content}
      </div>
    </div>
  );
}

function EmptyHistory() {
  return (
    <div className="Message Message--state-error">
      Your history is empty!
    </div>
  )
}

function OrderHistory(props) {
  const orders = props.orders.slice();
  const orderList = orders.reverse().map((order, index) => {
    let total = 0;
    const products = order.products;
    products.forEach(product => {
      let {amount, price} = product;
      total += amount * price;
    });
    return (
      <div key={index} className='Order'>
        <div className='Order-date'>
          <span><b>Number:</b> {orders.length - index}</span>
          <br />
          <span><b>Date:</b> {order.time}</span>
          <br />
          <span><b>Total:</b> ${total}</span>
        </div>
        <ProductList products={products} display={'inline'} hideControls={true}></ProductList>
      </div>
    );
  });
  return orderList
}

export default History;
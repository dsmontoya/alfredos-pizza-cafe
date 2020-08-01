import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Product from './Product';

test('executes onAddToCart when added to cart',()=>{
  const product = {};
  const onAddToCart = jest.fn();

  render(<Product product={product} display={"block"} onAddToCart={onAddToCart}/>);

  fireEvent.click(screen.getByText('Add To Cart'));
  expect(onAddToCart).toHaveBeenCalledTimes(1);
});

test('shows attributes properly',()=>{
  const classStart = 'Product-';
  const classEnd = '--display-block';
  const product = {name: 'pizza', price: 10, description: 'some text'};

  render(<Product product={product} display={"block"}/>);

  expect(document.getElementsByClassName(classStart+'name'+classEnd)[0]).toHaveTextContent(product.name);
  expect(document.getElementsByClassName(classStart+'price'+classEnd)[0]).toHaveTextContent("$"+product.price);
  expect(document.getElementsByClassName(classStart+'description'+classEnd)[0]).toHaveTextContent(product.description);
  expect(document.getElementsByClassName(classStart+'description'+classEnd)[0]).toHaveTextContent(product.description);
});
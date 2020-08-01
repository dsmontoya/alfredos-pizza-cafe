import React from 'react';
import { render, fireEvent, screen, cleanup } from '@testing-library/react';
import { createMemoryHistory } from 'history'
import { Router, MemoryRouter } from "react-router-dom";
import App from './App';

afterEach(() => {
  clickHomeButton();
});

test('updates number of products', () => {
  render(<App />);

  clickAddToCart();

  expect(document.getElementsByClassName('CartButton-counter')[0]).toHaveTextContent('4');
});

test('displays the total', () => {
  render(<App />);

  clickAddToCart();
  clickCartButton();

  expect(document.getElementsByClassName('Cart-purchase')[0]).toHaveTextContent('Check out ($34)');
});

test('decreases the number of products', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  clickAddToCart();
  clickCartButton();

  const buttons = document.getElementsByClassName('Product-amountControls__button');
  fireEvent.click(buttons[0]);

  expect(document.getElementsByClassName('CartButton-counter')[0]).toHaveTextContent('3');
  expect(document.getElementsByClassName('Product')).toHaveLength(2)
});

test('increases the number of products', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  clickAddToCart();
  clickCartButton();

  const buttons = document.getElementsByClassName('Product-amountControls__button');
  fireEvent.click(buttons[1]);

  expect(document.getElementsByClassName('CartButton-counter')[0]).toHaveTextContent('5');
  expect(document.getElementsByClassName('Product')).toHaveLength(2)
});

test('removes a product', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  clickAddToCart();
  clickCartButton();

  const buttons = document.getElementsByClassName('Product-amountControls__button');
  fireEvent.click(buttons[0]);
  fireEvent.click(buttons[0]);

  expect(document.getElementsByClassName('CartButton-counter')[0]).toHaveTextContent('2');
  expect(document.getElementsByClassName('Product')).toHaveLength(1)
});

function clickAddToCart() {
  const addToCartButtons = screen.getAllByText('Add To Cart');

  fireEvent.click(addToCartButtons[0]);
  fireEvent.click(addToCartButtons[0]);
  fireEvent.click(addToCartButtons[1]);
  fireEvent.click(addToCartButtons[1]);
}

function clickCartButton() {
  fireEvent.click(document.getElementsByClassName('CartButton')[0]);
}

function clickHomeButton() {
  fireEvent.click(document.getElementsByClassName('Header-title')[0]);
}

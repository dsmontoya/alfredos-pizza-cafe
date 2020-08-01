import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';

test('updates number of products', () => {
  render(<App />)

  const addToCartButtons = screen.getAllByText('Add To Cart')

  fireEvent.click(addToCartButtons[0]);
  fireEvent.click(addToCartButtons[1]);
  
  expect(document.getElementsByClassName('CartButton-counter')[0]).toHaveTextContent('2')
});

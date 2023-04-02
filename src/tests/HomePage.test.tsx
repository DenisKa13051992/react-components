import React from 'react';
import { render } from '@testing-library/react';
import HomePage from '../pages/HomePage';
import data from '../data';

describe('Home Page', () => {
  it('renders Home Page', () => {
    render(<HomePage />);
    expect(document.getElementsByClassName('cart-item').length).toBe(data.length);
  });
});

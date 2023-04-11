import React from 'react';
import { render } from '@testing-library/react';
import HomePage from '../pages/HomePage';
import CartList from '../components/CartList';
import { rickAndMortyStartData } from '../data';
import CartModal from '../components/CartModal';
import { vi } from 'vitest';

const mockFn = vi.fn();
const rickAndMortyStartDataItem = rickAndMortyStartData[0];
describe('Home Page', () => {
  it('renders Home Page', () => {
    render(<HomePage />);
    expect(document.getElementsByClassName('preloader-div')).toBeDefined();
  });

  it('renders Home Page', () => {
    render(<CartList characterResults={rickAndMortyStartData} />);
    expect(document.getElementsByClassName('cart-item').length).toBe(1);
  });

  it('renders Home Page', () => {
    render(<CartModal characterResult={rickAndMortyStartDataItem} closeModal={mockFn} />);
    expect(document.getElementsByClassName('cart-modal-overlay')).toBeDefined();
  });
});

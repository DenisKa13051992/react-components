import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from '../pages/HomePage';
import CartList from '../components/CartList';
import { rickAndMortyStartData } from '../data';
import CartModal from '../components/CartModal';
import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from '../store/store';

const mockFn = vi.fn();
const rickAndMortyStartDataItem = rickAndMortyStartData[0];
describe('Home Page', () => {
  it('renders Home Page', () => {
    render(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );
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

  it('renders Home Page', async () => {
    render(<CartModal characterResult={rickAndMortyStartDataItem} closeModal={mockFn} />);
    const closeButton = screen.getByTestId('cart-modal-close');
    await userEvent.click(closeButton);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('display the correct title', () => {
    render(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );
    const message = screen.queryByText(/Rick and Morty characters/i);
    expect(message).toBeVisible();
  });
});

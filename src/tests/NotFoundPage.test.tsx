import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutUsPage from '../pages/NotFoundPage';

describe('Not found page', () => {
  it('renders Not found page', () => {
    render(<AboutUsPage />);
    expect(
      screen.getByRole('heading', {
        name: new RegExp('Not found page', 'i'),
      })
    );
  });
});

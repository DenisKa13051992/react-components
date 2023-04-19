import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

describe('Header component', () => {
  it('render Denis link', () => {
    render(<Footer />);
    expect(screen.getByText(/Karnachenko/i)).toBeDefined();
    expect(
      screen
        .getByRole('link', { name: /Denis Karnachenko 2023/i })
        .hasAttribute('https://github.com/DenisKa13051992')
    );
  });

  it('render RSS link', () => {
    render(<Footer />);
    expect(screen.getAllByText(/RSSchool/i)).toBeDefined();
    expect(
      screen
        .getByRole('link', { name: /RSSchool/i })
        .hasAttribute('https://wearecommunity.io/events/rs-react-2023q1')
    );
  });
});

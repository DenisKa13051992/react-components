import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '../components/Header';

describe('Header component', () => {
  it('render main nav', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Header />
      </MemoryRouter>
    );
    expect(screen.getByText(/Main/i)).toBeDefined();
  });

  it('render about nav', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <Header />
      </MemoryRouter>
    );

    expect(screen.getAllByText(/About Us/i)).toBeDefined();
  });

  it('render forms nav', () => {
    render(
      <MemoryRouter initialEntries={['/forms']}>
        <Header />
      </MemoryRouter>
    );

    expect(screen.getAllByText(/Forms/i)).toBeDefined();
  });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import FormPage from '../pages/FormPage';

describe('Form page', () => {
  it('render user name label', () => {
    render(<FormPage userName={''} />);
    expect(screen.getAllByRole('option')).toBeDefined();
  });

  it('render user name label', () => {
    render(<FormPage userName={''} />);
    expect(screen.getByText(/User name:/i)).toBeDefined();
  });

  it('render birthdate label', () => {
    render(<FormPage userName={''} />);
    expect(screen.getAllByText(/Select birthdate:/i)).toBeDefined();
  });

  it('render country label', () => {
    render(<FormPage userName={''} />);
    expect(screen.getAllByText(/Select country:/i)).toBeDefined();
  });

  it('render file label', () => {
    render(<FormPage userName={''} />);
    expect(screen.getAllByText(/Upload foto:/i)).toBeDefined();
  });

  it('render gender label', () => {
    render(<FormPage userName={''} />);
    expect(screen.getAllByText(/Male/i)).toBeDefined();
    expect(screen.getAllByText(/Female/i)).toBeDefined();
  });

  it('render updates label', () => {
    render(<FormPage userName={''} />);
    expect(screen.getAllByText(/I want to receive updates/i)).toBeDefined();
  });
});

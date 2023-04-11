import React from 'react';
import { render, screen } from '@testing-library/react';
import FormPage from '../pages/FormPage';
import userEvent from '@testing-library/user-event';

describe('Form page', () => {
  it('check options', () => {
    render(<FormPage />);
    expect(screen.getAllByRole('option')).toBeDefined();
  });

  it('check user name', () => {
    render(<FormPage />);
    expect(screen.getByText(/User name:/i)).toBeDefined();
    expect(screen.getByRole('textbox')).toBeDefined();
  });

  it('check birthdate', () => {
    render(<FormPage />);
    expect(screen.getAllByText(/Select birthdate:/i)).toBeDefined();
    expect(screen.getByTestId('date-picker')).toBeDefined();
  });

  it('check country', () => {
    render(<FormPage />);
    expect(screen.getAllByText(/Select country:/i)).toBeDefined();
    expect(screen.getByTestId('country-picker')).toBeDefined();
  });

  it('check file-loader', () => {
    render(<FormPage />);
    expect(screen.getAllByText(/Upload foto:/i)).toBeDefined();
    expect(screen.getByTestId('file-picker')).toBeDefined();
  });

  it('check gender', () => {
    render(<FormPage />);
    expect(screen.getAllByText(/Male/i)).toBeDefined();
    expect(screen.getAllByText(/Female/i)).toBeDefined();
    expect(screen.getByTestId('gender-picker-male')).toBeDefined();
    expect(screen.getByTestId('gender-picker-female')).toBeDefined();
  });

  it('check checkbox', () => {
    render(<FormPage />);
    expect(screen.getByText(/I want to receive updates/i)).toBeDefined();
    expect(screen.getByRole('checkbox')).toBeDefined();
  });

  it('check checkbox', () => {
    render(<FormPage />);
    userEvent.click(screen.getByTestId('submit-button'));
    expect(screen.getByTestId('submit-button')).toBeDefined();
  });
});

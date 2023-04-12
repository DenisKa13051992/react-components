import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import FormPage from '../pages/FormPage';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

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

  it('Check adding cart', async () => {
    window.URL.createObjectURL = vi.fn();
    const image = new File([''], 'picture.jpeg', { type: 'image/jpeg' });
    render(<FormPage />);
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'Test' } });
    fireEvent.change(screen.getByTestId('date-picker')!, {
      target: { value: '2023-05-13' },
    });
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'Belarus' } });
    fireEvent.click(screen.getByRole('checkbox'));
    fireEvent.click(screen.getAllByRole('radio')[0]);
    const input = screen.getByLabelText(/Upload foto:/i);
    await userEvent.upload(input, image);
    fireEvent.click(screen.getByTestId('submit-button'));
    await waitFor(() => {
      expect(screen.getByText(/Success!/i)).toBeInTheDocument();
    });
  });
});

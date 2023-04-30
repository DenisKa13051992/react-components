import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import FormPage from '../pages/FormPage';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import { Provider } from 'react-redux';
import { store } from '../store/store';

describe('Form page', () => {
  it('check options', () => {
    render(
      <Provider store={store}>
        <FormPage />
      </Provider>
    );
    expect(screen.getAllByRole('option')).toBeDefined();
  });

  it('check user name', () => {
    render(
      <Provider store={store}>
        <FormPage />
      </Provider>
    );
    expect(screen.getByText(/User name:/i)).toBeDefined();
    expect(screen.getByRole('textbox')).toBeDefined();
  });

  it('check birthdate', () => {
    render(
      <Provider store={store}>
        <FormPage />
      </Provider>
    );
    expect(screen.getAllByText(/Select birthdate:/i)).toBeDefined();
    expect(screen.getByTestId('date-picker')).toBeDefined();
  });

  it('check country', () => {
    render(
      <Provider store={store}>
        <FormPage />
      </Provider>
    );
    expect(screen.getAllByText(/Select country:/i)).toBeDefined();
    expect(screen.getByTestId('country-picker')).toBeDefined();
  });

  it('check file-loader', () => {
    render(
      <Provider store={store}>
        <FormPage />
      </Provider>
    );
    expect(screen.getAllByText(/Upload foto:/i)).toBeDefined();
    expect(screen.getByTestId('file-picker')).toBeDefined();
  });

  it('check gender', () => {
    render(
      <Provider store={store}>
        <FormPage />
      </Provider>
    );
    expect(screen.getAllByText(/Male/i)).toBeDefined();
    expect(screen.getAllByText(/Female/i)).toBeDefined();
    expect(screen.getByTestId('gender-picker-male')).toBeDefined();
    expect(screen.getByTestId('gender-picker-female')).toBeDefined();
  });

  it('check checkbox', () => {
    render(
      <Provider store={store}>
        <FormPage />
      </Provider>
    );
    expect(screen.getByText(/I want to receive updates/i)).toBeDefined();
    expect(screen.getByRole('checkbox')).toBeDefined();
  });

  it('check checkbox', () => {
    render(
      <Provider store={store}>
        <FormPage />
      </Provider>
    );
    userEvent.click(screen.getByTestId('submit-button'));
    expect(screen.getByTestId('submit-button')).toBeDefined();
  });

  it('Check adding cart', async () => {
    window.URL.createObjectURL = vi.fn();
    const image = new File([''], 'picture.jpeg', { type: 'image/jpeg' });
    render(
      <Provider store={store}>
        <FormPage />
      </Provider>
    );
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

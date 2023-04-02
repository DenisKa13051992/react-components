import React from 'react';
import { render, screen } from '@testing-library/react';
import UserName from '../components/forms/UserName';

describe('Form component user name', () => {
  it('render label user name', () => {
    render(<UserName userName={''} />);
    expect(screen.getByText(/User name:/i)).toBeDefined();
    expect(screen.getByRole('textbox')).toBeDefined();
  });
});

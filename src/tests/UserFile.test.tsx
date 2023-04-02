import React from 'react';
import { render, screen } from '@testing-library/react';
import UserFile from '../components/forms/UserFile';

describe('Form component file', () => {
  it('render label file', () => {
    render(<UserFile propRef={null} isInvalidUserFile={false} />);
    expect(screen.getByText(/Upload foto:/i)).toBeDefined();
    expect(screen.getByTestId('file-picker')).toBeDefined();
  });
});

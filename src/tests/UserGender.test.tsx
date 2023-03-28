import React from 'react';
import { render, screen } from '@testing-library/react';
import UserGender from '../components/forms/UserGender';

describe('Form component gender', () => {
  it('render label male', () => {
    render(<UserGender propRef={null} userName={''} />);
    expect(screen.getAllByText(/Male/i).length).toBe(2);
    expect(screen.getByTestId('gender-picker-male')).toBeDefined();
  });

  it('render label female', () => {
    render(<UserGender propRef={null} userName={''} />);
    expect(screen.getByText(/Female/i)).toBeDefined();
    expect(screen.getByTestId('gender-picker-female')).toBeDefined();
  });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import UserBirthdate from '../components/forms/UserBirthdate';

describe('Form component birthdate', () => {
  it('render label birthdate', () => {
    render(<UserBirthdate userName={''} />);
    expect(screen.getByText(/Select birthdate:/i)).toBeDefined();
    expect(screen.getByTestId('date-picker')).toBeDefined();
  });
});

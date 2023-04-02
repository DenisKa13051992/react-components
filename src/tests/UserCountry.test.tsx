import React from 'react';
import { render, screen } from '@testing-library/react';
import UserCountry from '../components/forms/UserCountry';

describe('Form component country', () => {
  it('render label country', () => {
    render(<UserCountry userName={''} propRef={null} isInvalidCountry={false} />);
    expect(screen.getByText(/Select country:/i)).toBeDefined();
    expect(screen.getByTestId('country-picker')).toBeDefined();
  });
});

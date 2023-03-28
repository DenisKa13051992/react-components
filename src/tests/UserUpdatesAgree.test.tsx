import React from 'react';
import { render, screen } from '@testing-library/react';
import UserUpdatesAgree from '../components/forms/UserUpdatesAgree';

describe('Form component user updates agree', () => {
  it('render label user updates agree', () => {
    render(<UserUpdatesAgree userName={''} />);
    expect(screen.getByText(/I want to receive updates/i)).toBeDefined();
    expect(screen.getByRole('checkbox')).toBeDefined();
  });
});

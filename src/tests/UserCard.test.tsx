import React from 'react';
import { render, screen } from '@testing-library/react';
import UserCard from '../components/forms/UserCard';
describe('Form page', () => {
  it('render options', () => {
    render(
      <UserCard
        userCardInfo={{
          userName: 'Test',
          userBirthdate: 'T-E-S-T',
          userCountry: 'Test',
          userPhoto: 'test.jpg',
          userAgree: 'I want to receive updates',
          userGender: 'Test',
        }}
        key={1}
      />
    );
    expect(screen.getByText(/Name:/i)).toBeDefined();
    expect(screen.getByText(/Birthdate:/i)).toBeDefined();
    expect(screen.getByText(/Country:/i)).toBeDefined();
    expect(screen.getByRole('img')).toBeDefined();
    expect(screen.getByText(/Gender/i)).toBeDefined();
    expect(screen.getByText(/I want to receive updates/i)).toBeDefined();
  });
});

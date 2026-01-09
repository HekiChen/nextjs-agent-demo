import { render, screen } from '@testing-library/react';
import { User } from '../models/User';

describe('User Model', () => {
  it('should create a user with valid data', () => {
    const user = new User({ name: 'John Doe', email: 'john@example.com' });
    expect(user.name).toBe('John Doe');
    expect(user.email).toBe('john@example.com');
  });

  it('should throw an error if email is not unique', async () => {
    await User.create({ name: 'Jane Doe', email: 'john@example.com' });
    await expect(User.create({ name: 'John Smith', email: 'john@example.com' })).rejects.toThrow();
  });
});

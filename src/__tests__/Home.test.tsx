import { render, screen } from '@testing-library/react';
import Home from '../app/page';

describe('Home Page', () => {
  it('renders the homepage correctly', () => {
    render(<Home />);
    expect(screen.getByText(/welcome to my nextjs app/i)).toBeInTheDocument();
  });
});

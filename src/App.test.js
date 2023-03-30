import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Post Layout 1', () => {
  render(<App />);
  const linkElement = screen.getByText(/Post Layout 1/i);
  expect(linkElement).toBeInTheDocument();
});

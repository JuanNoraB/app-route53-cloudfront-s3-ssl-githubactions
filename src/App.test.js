import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Post Layout 1 iframe', () => {
  render(<App />);
  const iframeElement = screen.getByTitle('Post Layout 1');
  expect(iframeElement).toBeInTheDocument();
});

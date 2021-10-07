import { render, screen } from '@testing-library/react';
import App_31 from './App_31';

test('renders learn react link', () => {
  render(<App_31 />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

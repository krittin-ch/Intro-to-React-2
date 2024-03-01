import { render, screen } from '@testing-library/react';
import {Game} from './App';

test('renders learn react link', () => {
  render(<Game />);
  const linkElement = screen.getByText(/welcome to my app/i);
  expect(linkElement).toBeInTheDocument();
});
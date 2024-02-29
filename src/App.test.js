import { render, screen } from '@testing-library/react';
import {MyApp3} from './App';

test('renders learn react link', () => {
  render(<ShoppingList />);
  const linkElement = screen.getByText(/welcome to my app/i);
  expect(linkElement).toBeInTheDocument();
});
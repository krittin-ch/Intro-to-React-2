import { render, screen } from '@testing-library/react';
import {MyApp, Profile} from './App';

test('renders learn react link', () => {
  render(<Profile />);
  const linkElement = screen.getByText(/welcome to my app/i);
  expect(linkElement).toBeInTheDocument();
});
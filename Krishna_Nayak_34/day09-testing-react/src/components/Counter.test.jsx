import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('Counter initializes at 0', () => {
  render(<Counter />);
  expect(screen.getByText(/count: 0/i)).toBeInTheDocument();
});

test('Increment button works', () => {
  render(<Counter />);
  fireEvent.click(screen.getByText(/increment/i));
  expect(screen.getByText(/count: 1/i)).toBeInTheDocument();
});

test('Decrement button works', () => {
  render(<Counter />);
  fireEvent.click(screen.getByText(/decrement/i));
  expect(screen.getByText(/count: -1/i)).toBeInTheDocument();
});

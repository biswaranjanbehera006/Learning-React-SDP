import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../components/Button";

test("renders button", () => {
  render(<Button label="Hello" />);
  expect(screen.getByText("Hello")).toBeInTheDocument();
});

test("calls onClick", () => {
  const fn = jest.fn();
  render(<Button label="Click" onClick={fn} />);
  fireEvent.click(screen.getByText("Click"));
  expect(fn).toHaveBeenCalled();
});

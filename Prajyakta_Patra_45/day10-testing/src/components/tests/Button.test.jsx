import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../components/Button";

test("renders button and handles click", () => {
  const handleClick = jest.fn();
  render(<Button label="Click Me" onClick={handleClick} />);

  fireEvent.click(screen.getByText("Click Me"));
  expect(handleClick).toHaveBeenCalledTimes(1);
});

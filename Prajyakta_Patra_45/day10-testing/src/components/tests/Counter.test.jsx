import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "../components/Counter";

test("increments counter", () => {
  render(<Counter />);
  fireEvent.click(screen.getByText("Increment"));
  expect(screen.getByTestId("count")).toHaveTextContent("1");
});

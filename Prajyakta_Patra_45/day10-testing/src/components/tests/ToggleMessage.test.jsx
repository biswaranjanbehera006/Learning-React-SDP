import { render, screen, fireEvent } from "@testing-library/react";
import ToggleMessage from "../components/ToggleMessage";

test("toggles message", () => {
  render(<ToggleMessage />);
  fireEvent.click(screen.getByText("Toggle"));
  expect(screen.getByText("Hello World")).toBeInTheDocument();
});

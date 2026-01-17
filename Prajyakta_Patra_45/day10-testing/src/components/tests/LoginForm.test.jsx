import { render, screen, fireEvent } from "@testing-library/react";
import LoginForm from "../components/LoginForm";

test("submits form data", () => {
  const handleSubmit = jest.fn();
  render(<LoginForm onSubmit={handleSubmit} />);

  fireEvent.change(screen.getByPlaceholderText("Email"), {
    target: { value: "test@mail.com" },
  });

  fireEvent.change(screen.getByPlaceholderText("Password"), {
    target: { value: "1234" },
  });

  fireEvent.click(screen.getByText("Login"));

  expect(handleSubmit).toHaveBeenCalledWith({
    email: "test@mail.com",
    password: "1234",
  });
});

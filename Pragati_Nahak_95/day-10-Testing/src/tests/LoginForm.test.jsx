import { render, screen, fireEvent } from "@testing-library/react";
import LoginForm from "../components/LoginForm";

test("invalid login", () => {
  render(<LoginForm />);
  fireEvent.change(screen.getByPlaceholderText("Email"), { target: { value: "x" } });
  fireEvent.change(screen.getByPlaceholderText("Password"), { target: { value: "1" } });
  fireEvent.click(screen.getByText("Login"));
  expect(screen.getByText("Invalid Credentials")).toBeInTheDocument();
});

test("valid login", () => {
  render(<LoginForm />);
  fireEvent.change(screen.getByPlaceholderText("Email"), { target: { value: "admin@test.com" } });
  fireEvent.change(screen.getByPlaceholderText("Password"), { target: { value: "123456" } });
  fireEvent.click(screen.getByText("Login"));
  expect(screen.getByText("Login Successful")).toBeInTheDocument();
});

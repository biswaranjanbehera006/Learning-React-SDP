import { render, screen } from "@testing-library/react";
import UserList from "../components/UserList";

test("renders user list", () => {
  const users = [{ id: 1, name: "Alice" }];
  render(<UserList users={users} />);
  expect(screen.getByText("Alice")).toBeInTheDocument();
});

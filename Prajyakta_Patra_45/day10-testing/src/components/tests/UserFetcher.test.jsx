import { render, screen } from "@testing-library/react";
import UserFetcher from "../components/UserFetcher";

test("fetches and displays user", async () => {
  render(<UserFetcher />);
  expect(await screen.findByText("John")).toBeInTheDocument();
});

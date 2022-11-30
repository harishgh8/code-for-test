import { render, screen } from "@testing-library/react";
import { Users } from "./Users";
import userEvent from "@testing-library/user-event";

describe("renders component correctly", () => {
  it.only("renders heading", () => {
    render(<Users />);
    const Heading = screen.getByRole("heading");
    expect(Heading).toBeInTheDocument();
  });

  //   testing api
});

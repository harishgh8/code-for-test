import { MuiMode } from "./MuiMode";
import { AppProviders } from "../../providers/AppProviders";
import userEvent from "@testing-library/user-event";
import { screen, render } from "@testing-library/react";

describe("renders component correctly", () => {
  it.only("should render heading  element", () => {
    render(<MuiMode />, { wrapper: AppProviders });
    const h1Ele = screen.getByRole("heading");
    expect(h1Ele).toHaveTextContent("dark mode");
  });
});

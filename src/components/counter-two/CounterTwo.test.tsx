import { render, screen } from "@testing-library/react";
import { CounterTwo } from "./CounterTwo";
import userEvent from "@testing-library/user-event";
describe("renders component correctly", () => {
  it("renders heading", () => {
    render(<CounterTwo count={0} />);
    const Heading = screen.getByRole("heading");
    expect(Heading).toBeInTheDocument();
  });
  it.only("renders count value correctly", () => {
    render(<CounterTwo count={10} />);
    const Paragraph = screen.getByText("10");
    expect(Paragraph).toBeInTheDocument();
  });
  it("testing handleincrement function", () => {
    userEvent.setup();
    const incremntFn = jest.fn();
    const decrFn = jest.fn();
    render(
      <CounterTwo
        count={10}
        handleDecrement={decrFn}
        handleIncrement={incremntFn}
      />
    );
    const incrBtn = screen.getByRole("button", { name: "Increment" });
    const decreBtn = screen.getByRole("button", { name: "Decrement" });
    userEvent.click(incrBtn);
    expect(incremntFn).toHaveBeenCalled();

    userEvent.click(decreBtn);
    expect(decrFn).toHaveBeenCalled();
  });
});

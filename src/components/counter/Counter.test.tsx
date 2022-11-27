import { Counter } from "./Counter";
import userEvent from "@testing-library/user-event";
import { screen, render } from "@testing-library/react";

describe("renders component correctly", () => {
  it("should render heading  element", () => {
    render(<Counter />);
    const h1Ele = screen.getByRole("heading");
    expect(h1Ele).toBeInTheDocument();
  });
  it("should render increment button", () => {
    render(<Counter />);
    const incrBtn = screen.getByRole("button", { name: "Increment" });
    expect(incrBtn).toBeInTheDocument();
  });
  it("should render set button", () => {
    render(<Counter />);
    const setBtn = screen.getByRole("button", { name: "Set" });
    expect(setBtn).toBeInTheDocument();
  });

  //   if input has type-number then the role will be spinbutton
  it("should render input element", () => {
    render(<Counter />);
    const inpt = screen.getByRole("spinbutton");
    expect(inpt).toBeInTheDocument();
  });
  //   to test intital state linked to the input field
  it("should render spinbutton with with state value zero", () => {
    render(<Counter />);
    const spnBtn = screen.getByDisplayValue(0);
    expect(spnBtn).toBeInTheDocument();
  });
  it("should render h1 element with initial value", () => {
    render(<Counter />);
    const h1Elmt = screen.getByRole("heading");
    expect(h1Elmt).toHaveTextContent("0");
  });

  //   userEvent
  it("should increament upon incr btn click", async () => {
    userEvent.setup();
    render(<Counter />);
    const incrBtn = screen.getByRole("button", { name: "Increment" });
    await userEvent.dblClick(incrBtn);
    const h1Elmt = screen.getByRole("heading");
    expect(h1Elmt).toHaveTextContent("2");
  });
  //   tooltip assignment hove and unhover 3 cases
  // 1.tooltip should to be in the doc
  // 2. when user hovers the btn tesh should show
  // 3.tooltip in the doc

  it("onchange is linked to state and state linked to input value(three way binding)", async () => {
    userEvent.setup();
    render(<Counter />);
    const inpTEl = screen.getByRole("spinbutton");
    // userEvent.type accepts always string
    await userEvent.type(inpTEl, "234");
    // the input element has type-number so we should expect it to be number
    expect(inpTEl).toHaveValue(234);
  });
  it.only("onchange is linked to setstate, the set button accepting one state and setting another state reulting in h1 update", async () => {
    userEvent.setup();
    render(<Counter />);
    const inpTEl = screen.getByRole("spinbutton");
    const stbtn = screen.getByRole("button", { name: "Set" });
    const h1Elmt = screen.getByRole("heading");
    await userEvent.type(inpTEl, "234");
    await userEvent.click(stbtn);
    expect(h1Elmt).toHaveTextContent("234");
  });
  //   userEvent.clear , userEvent.selectOptions and unselect
  //
});

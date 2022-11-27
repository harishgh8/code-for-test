import { Skills } from "./Skills";
import { screen, render } from "@testing-library/react";

describe("renders component correctly", () => {
  const anArray = ["html", "css", "java"];
  it("renders the list", () => {
    render(<Skills skills={anArray} />);
    const aList = screen.getByRole("list");
    expect(aList).toBeInTheDocument();
  });

  it("renders multiple skill list items", () => {
    render(<Skills skills={anArray} />);
    const aList = screen.getAllByRole("listitem");
    expect(aList).toHaveLength(anArray.length);
  });
  it("renders  specific list item", () => {
    render(<Skills skills={anArray} />);
    const aListCSS = screen.getByText("css");
    expect(aListCSS).toBeInTheDocument();
  });
  it("renders  login button", () => {
    render(<Skills skills={anArray} />);
    const loginBtn = screen.getByRole("button", { name: "Login" });
    expect(loginBtn).toBeInTheDocument();
  });
  // queryBy is used when the element is not in the DOM but in the code- example conditional rendering
  it("should not render  start learning button", () => {
    render(<Skills skills={anArray} />);
    const startLearnBtn = screen.queryByRole("button", {
      name: "Start learning",
    });
    expect(startLearnBtn).not.toBeInTheDocument();
  });
  it("should render  start learning button asynchronously", async () => {
    render(<Skills skills={anArray} />);
    const startLearnBtn = await screen.findByRole(
      "button",
      { name: "Start learning" },
      { timeout: 1200 }
    );
    expect(startLearnBtn).toBeInTheDocument();
  });
  // it.only('should not render  login button aftern settimout',async ()=>{
  //     render(<Skills skills={anArray}/>)
  //     const loginBtn = await screen.findByRole('button', {name: "Login"},{timeout: 1200})
  //     expect(loginBtn).not.toBeInTheDocument()
  // })
});

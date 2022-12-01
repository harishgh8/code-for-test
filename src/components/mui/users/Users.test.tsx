import { render, screen } from "@testing-library/react";
import { Users } from "./Users";
import { mockUsers } from "./mockUsers/mockUsers";
import { rest } from "msw";
import { server } from "../../../mocks/server";
describe("renders component correctly", () => {
  it("renders heading", () => {
    render(<Users />);
    const Heading = screen.getByRole("heading");
    expect(Heading).toBeInTheDocument();
  });

  //   testing api
  it("if api call is returning", async () => {
    render(<Users />);
    const listItem = await screen.findAllByRole("listitem");
    expect(listItem).toHaveLength(mockUsers.length);
  });
  it.only("error message upon api call", async () => {
    server.use(
      rest.get(
        "https://jsonplaceholder.typicode.com/users",
        (req, res, ctx) => {
          return res(ctx.status(500));
        }
      )
    );
    render(<Users />);
    // whwnever we are rendering an elemnent conditionally/with API we have to get it by text not by role
    const paraElement = await screen.findByText("Error fetching users");
    expect(paraElement).toBeInTheDocument();
  });

  it("paragraph element present", () => {
    render(<Users />);
    const pEle = screen.getByRole("paragraph");
    expect(pEle).toHaveTextContent("This is a error message");
  });
});

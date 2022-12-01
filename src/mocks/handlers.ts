import { rest } from "msw";
import { mockUsers } from "../components/mui/users/mockUsers/mockUsers";

export const handlers = [
  rest.get("https://jsonplaceholder.typicode.com/users", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockUsers));
  }),
];

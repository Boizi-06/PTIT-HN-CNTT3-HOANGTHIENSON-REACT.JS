// src/routers/Router.tsx
import { createBrowserRouter } from "react-router-dom";
import ListPost from "../pages/ListPost";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ListPost />,
  },
]);

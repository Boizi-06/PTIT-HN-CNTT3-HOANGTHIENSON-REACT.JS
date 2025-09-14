import { RouterProvider } from "react-router-dom";

import { routers } from "./Routers";
export default function App() {
  return (
    <div>
      <RouterProvider router={routers}></RouterProvider>
    </div>
  );
}

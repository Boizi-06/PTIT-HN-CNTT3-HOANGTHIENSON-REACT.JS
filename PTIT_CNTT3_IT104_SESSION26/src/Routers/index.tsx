import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Admin from "../layouts/Admin";
import UserManager from "../pages/UserManager";
import ProductManager from "../pages/Productmanager";
import ProductsDetail from "../pages/ProductsDetail";
import OderManager from "../pages/OderManager";
import Notfound from "../pages/Notfound";
import Login from "../pages/Login";
import ProtectedRoute from "../componnent/ProtectedRoute";
import StudentDetail from "../componnent/Bai2/StudentDetail";
import Bai3 from "../componnent/bai3";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "/student/:name11",
    element: <StudentDetail></StudentDetail>,
  },
  {
    path: "/bai3",
    element: <Bai3 />,
  },
  {
    path: "/admin",
    element: <ProtectedRoute element={<Admin></Admin>}></ProtectedRoute>,
    children: [
      {
        path: "user",
        element: <UserManager />,
      },
      {
        path: "product",
        element: <ProductManager />,
      },
      {
        path: "product/:id",
        element: <ProductsDetail />,
      },
      {
        path: "oder",
        element: <OderManager />,
      },
    ],
  },

  {
    path: "*",
    element: <Notfound />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
]);

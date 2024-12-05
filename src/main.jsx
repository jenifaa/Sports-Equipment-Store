import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayOut from "./component/Main/MainLayOut.jsx";
import Home from "./component/Pages/Home.jsx";
import AddEquipment from "./component/Pages/AddEquipment.jsx";
import Signin from "./component/Pages/Signin.jsx";
import Signup from "./component/Pages/Signup.jsx";
import AuthProvider from "./component/Main/AuthProvider.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "add",
        element: <AddEquipment></AddEquipment>,
      },
    ],
  },
  {
    path: "login",
    element: <Signin></Signin>,
  },
  {
    path: "register",
    element: <Signup></Signup>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);

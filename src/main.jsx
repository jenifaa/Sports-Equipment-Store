import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayOut from "./component/Main/MainLayOut.jsx";
import Home from "./component/Pages/Home.jsx";
import AddEquipment from "./component/Pages/AddEquipment.jsx";
import Signin from "./component/Pages/Signin.jsx";
import Signup from "./component/Pages/Signup.jsx";
import AuthProvider from "./component/Main/AuthProvider.jsx";
import Error from "./component/Main/Error.jsx";
import All from "./component/Pages/All.jsx";
import EquipmentList from "./component/Pages/EquipmentList.jsx";
import UpdateEquipment from "./component/Pages/UpdateEquipment.jsx";
import EquipmentCards from "./component/Pages/EquipmentCards.jsx";
import EquipmentDetails from "./component/Pages/EquipmentDetails.jsx";
import PrivateRoutes from "./component/Main/PrivateRoutes.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "add",
        element: <AddEquipment></AddEquipment>,
        loader: () => fetch('https://equipment-store-server.vercel.app/users')
      },
      {
        path: "all",
        element: <All></All>,
        loader: () => fetch("https://equipment-store-server.vercel.app/equipment"),
      },
      {
        path: "list",
        element: <EquipmentList></EquipmentList>,
        loader: () => fetch("https://equipment-store-server.vercel.app/equipment"),
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
  {
    path: "/update/:id",
    element: (
      <PrivateRoutes>
        {" "}
        <UpdateEquipment></UpdateEquipment>,
      </PrivateRoutes>
    ),
    loader: ({ params }) => fetch(`https://equipment-store-server.vercel.app/equipment/${params.id}`),
  },
  {
    path: "/equipment/:id",
    element: (
      <PrivateRoutes>
        <EquipmentDetails></EquipmentDetails>,
      </PrivateRoutes>
    ),
    loader: () => fetch("https://equipment-store-server.vercel.app/equipment"),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </AuthProvider>
  </StrictMode>
);

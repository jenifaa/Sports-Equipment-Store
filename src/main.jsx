import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      },
      {
        path: 'all',
        element: <All></All>,
        loader: () => fetch('http://localhost:5000/equipment')
      },
      {
        path: "list",
        element: <EquipmentList></EquipmentList>
      }
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
    path: 'update',
    element: <UpdateEquipment></UpdateEquipment>
  },
  {
    path: '/equipment/:id',
    element: <EquipmentDetails></EquipmentDetails>,
    loader: () => fetch('http://localhost:5000/equipment')
  }

]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </AuthProvider>
  </StrictMode>
);

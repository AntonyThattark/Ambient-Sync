import Login from "./Components/Assests/Login/Login";
//import Face from "./face";
import Settings from "./settings";
import Shared from "./shared";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./Register";
import HomePage from "./Components/Assests/HomePage/HomePage";
//import Card from "./Card";
const router = createBrowserRouter([
  {
    path: "/Settings",
    element: <Settings />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Register",
    element: <Register />,
  },
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/shared",
    element: <Shared />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;

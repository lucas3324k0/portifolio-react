import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { UseContextProvider } from "./context/MeuContexto/MeuContexto";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home/Home.jsx";
import Project from "./routes/Project/Project.jsx";
import Contact from "./routes/Contacts/Contact.jsx";
import GetinTouch from "./components/FaleComigo/GetinTouch.jsx";
import FormContact from "./components/form/FormContact.jsx";
import SobreMim from "./routes/SobreMim/SobreMim.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/projects",
        element: <Project />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/GetInTouch",
        element: <GetinTouch />,
      },
      {
        path: '/FormContact',
        element: <FormContact />
      },
      {
        path: '/SobreMim',
        element: <SobreMim />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UseContextProvider>
      <RouterProvider router={router} />
    </UseContextProvider>
  </React.StrictMode>
);

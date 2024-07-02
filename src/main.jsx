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
import ErrorPage from "./ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/projects",
        element: <Project />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/contacs",
        element: <Contact />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/GetInTouch",
        element: <GetinTouch />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/FormContact",
        element: <FormContact />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/SobreMim",
        element: <SobreMim />,
        errorElement: <ErrorPage />,
      },
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

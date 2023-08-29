import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "tailwindcss/tailwind.css";
import { Contact } from "./pages/Contact.tsx";
import { About } from "./pages/About.tsx";
import "./input.css";
import ErrorPage from "./pages/Error-page.tsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/Contact",
      element: <Contact />,
    },
    {
      path: "/About",
      element: <About />,
    },
  ],
  { basename: "/portfolio-live" }
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

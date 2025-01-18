import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App.tsx";
import Applications from "./pages/Applications.tsx";
import Articles from "./pages/Articles.tsx";
import Error from "./pages/Error.tsx";

// Defining routes.
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "applications", element: <Applications /> },
      { path: "articles", element: <Articles /> },
      { path: "*", element: <Error /> }, // Catch-all route
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

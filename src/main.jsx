import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NotFound, UnExpectedErrorPage } from "./Components/Errors";
import Loading from "./Components/Shared/Loading";

const Home = React.lazy(() => import("./app/Home"));
const Login = React.lazy(() => import("./app/Login"));

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <UnExpectedErrorPage />,
  },
  {
    path: "/home",
    element: <Home />,
    errorElement: <UnExpectedErrorPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
);

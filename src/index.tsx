import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Home = React.lazy(() => import("./pages/Home/Home"));
const SomePage = React.lazy(() => import("./pages/SomePage/SomePage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense>
        <Home />
      </Suspense>
    ),
  },
  {
    path: "/some-page",
    element: (
      <Suspense>
        <SomePage />
      </Suspense>
    ),
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import ErrorPage from "../Pages/Error/ErrorPage";
import Home from "../Pages/Home/Home";
import AllApps from "../Pages/AllApp/AllApps";
import Installation from "../Pages/Installation/Installation";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
        loader: () => fetch("Apps.json"),
      },
      {
        path: "/allApps",
        Component: AllApps,
        loader: () => fetch("AllApps.json"),
      },
      {
        path: "/installation",
        Component: Installation,
        loader: () => fetch("AllApps.json"),
      },
    ],
  },
]);

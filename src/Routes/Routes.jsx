import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import MainLayouts from "../Layouts/MainLayouts";
import ErrorPage from "../Pages/ErrorPage";
import Installation from "../Pages/Installation";
import ProductsDetails from "../Pages/ProductsDetails";
import PageError from "../Pages/PageError";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    errorElement: <ErrorPage></ErrorPage>,
    hydrateFallbackElement: <p>Loading...</p>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/products",
        element: <Products></Products>,
        errorElement: <ErrorPage></ErrorPage>, // <-- Added route-specific error handler
      },
      {
        path: "/Installation",
        element: <Installation></Installation>,
      },
      {
        path: "/productsDetails/:id",
        element: <ProductsDetails></ProductsDetails>,
      },
    ],
  },
  {
    path: '*',
    element: <PageError></PageError>,
  }
]);

export default router;

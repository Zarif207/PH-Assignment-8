import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import MainLayouts from "../Layouts/MainLayouts";
import ErrorPage from "../Pages/ErrorPage";
import Installation from "../Pages/Installation";
import ProductsDetails from "../Pages/ProductsDetails";

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
//   {
//     path: '*',
//     element: <ErrorPage></ErrorPage>
//   }
]);

export default router;

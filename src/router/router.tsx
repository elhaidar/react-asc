/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromChildren,
} from "react-router-dom";
import HomePage from "../page/Home";
import ProductPage from "../page/Product";
import Layout from "../page/Layout";
import RentPage from "../page/Rent";
import AboutPage from "../page/About";

const AppRouter = () => {
  const router = createBrowserRouter(
    createRoutesFromChildren(
      <>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="product" element={<ProductPage />} />
          <Route path="rent" element={<RentPage />} />
          <Route path="about" element={<AboutPage />} />
        </Route>
      </>
    )
  );
  return <RouterProvider router={router} />;
};

export default AppRouter;

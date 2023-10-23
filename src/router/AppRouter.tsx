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
import CreatePage from "../page/Product/pages/create";

const AppRouter = () => {
  const router = createBrowserRouter(
    createRoutesFromChildren(
      <>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="product">
            <Route index element={<ProductPage />} />
            <Route path="create" element={<CreatePage />} />
          </Route>
          <Route path="rent" element={<RentPage />} />
          <Route path="about" element={<AboutPage />} />
        </Route>
      </>
    )
  );
  return <RouterProvider router={router} />;
};

export default AppRouter;

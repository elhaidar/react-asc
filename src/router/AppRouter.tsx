/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromChildren,
} from "react-router-dom";
import Layout from "../page/Dashboard/Layout";
import HomePage from "../page/Dashboard/Home";
import ProductPage from "../page/Dashboard/Product";
import CreatePage from "../page/Dashboard/Product/pages/create";
import EditPage from "../page/Dashboard/Product/pages/edit";
import UserPage from "../page/Dashboard/User";
import AboutPage from "../page/Dashboard/About";
import CheckAuth from "../middleware/authMiddleware";
import RootLayout from "../page/Layout";
import LoginPage from "../page/Login";

const AppRouter = () => {
  const router = createBrowserRouter(
    createRoutesFromChildren(
      <>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<CheckAuth />}>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="product">
                <Route index element={<ProductPage />} />
                <Route path="create" element={<CreatePage />} />
                <Route path="edit/:id" element={<EditPage />} />
              </Route>
              <Route path="User" element={<UserPage />} />
              <Route path="about" element={<AboutPage />} />
            </Route>
          </Route>
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </>
    )
  );
  return <RouterProvider router={router} />;
};

export default AppRouter;

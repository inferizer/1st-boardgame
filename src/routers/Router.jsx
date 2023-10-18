import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/user/HomePage";
import Layout from "../layouts/Layout";
import ProfilePage from "../pages/user/ProfilePage";
import RegisterPage from "../pages/user/RegisterPage";
import LoginPage from "../pages/user/LoginPage";
import ProductPage from "../pages/user/ProductPage";
import AdminUpdatePage from "../pages/admin/AdminUpdatePage";
import AdminReportPage from "../pages/admin/AdminReportPage";
import AdminLayout from "../layouts/AdminLayout";
import AdminCheckPage from "../pages/admin/AdminCheckPage";
import RedirectIfAuthenticated from "../features/auth/RedirectIfAuthenticated";
import Authenticated from "../features/auth/Authenticated";

const router = createBrowserRouter([
  {
    path: "admin",
    element: <AdminLayout />,
    children: [
      { path: "", element: <AdminReportPage /> },
      { path: "update-product", element: <AdminUpdatePage /> },
      { path: "check-order", element: <AdminCheckPage /> },
    ],
  },

  {
    path: "/",
    element: (
      //<Authenticated>
      <Layout />
      // </Authenticated>
    ),
    children: [
      {
        path: "login",
        element: (
          <RedirectIfAuthenticated>
            <LoginPage />
          </RedirectIfAuthenticated>
        ),
      },

      { path: "", element: <HomePage /> },
      {
        path: "register",
        element: (
          <RedirectIfAuthenticated>
            <RegisterPage />
          </RedirectIfAuthenticated>
        ),
      },
      { path: "product", element: <ProductPage /> },
      { path: "profile", element: <ProfilePage /> },
      //   { path: "profile/:profileId", element: <ProfilePage /> },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}

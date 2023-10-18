import { Outlet } from "react-router-dom";
import AdminHeader from "./AdminHeader";

export default function AdminLayout() {
  return (
    <>
      <AdminHeader />
      <Outlet />
    </>
  );
}

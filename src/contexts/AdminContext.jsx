import { createContext } from "react";
import axios from "../config/axios";

export const AdminContext = createContext();

export default function AdminContextProvider({ children }) {
  const UpdateProduct = async (productDetail) => {
    const res = await axios.post("/admin/update", productDetail);
  };
  const contextValue = { UpdateProduct };
  return (
    <AdminContext.Provider value={contextValue}>
      {children}
    </AdminContext.Provider>
  );
}

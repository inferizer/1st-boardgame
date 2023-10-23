import { createContext } from "react";
import axios from "../config/axios";
import { useState } from "react";

export const AdminContext = createContext();

export default function AdminContextProvider({ children }) {
  const [checkUpdateData, setCheckUpdateData] = useState(false);
  const [updateResult, setUpdateResult] = useState([]);
  const updateProduct = async (productDetail) => {
    const res = await axios.post("/admin/add-product", productDetail);
  };

  const deleteProduct = async (productId) => {
    const res = await axios.delete(`/admin/delete/${productId}`);
    // console.log(res);
  };

  const addStock = async (productId, updateStock) => {
    console.log(updateStock);
    const res = await axios.post(`admin/add-stock/${productId}`, updateStock);
  };

  const contextValue = {
    updateResult,
    setUpdateResult,
    deleteProduct,
    addStock,
    updateProduct,
    checkUpdateData,
    setCheckUpdateData,
  };
  return (
    <AdminContext.Provider value={contextValue}>
      {children}
    </AdminContext.Provider>
  );
}

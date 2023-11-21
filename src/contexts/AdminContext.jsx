import { createContext } from "react";
import axios from "../config/axios";
import { useState } from "react";

export const AdminContext = createContext();

export default function AdminContextProvider({ children }) {
  const [checkUpdateData, setCheckUpdateData] = useState(false);
  const [updateResult, setUpdateResult] = useState([]);
  const [updateStock, setUpdateStock] = useState({
    stock: "",
    price: "",
  });
  const updateProduct = async (productDetail) => {
    await axios.post("/admin/add-product", productDetail);
  };

  const deleteProduct = async (productId) => {
    await axios.delete(`/admin/delete/${productId}`);
  };

  const addStock = async (productId, updateStock) => {
    await axios.post(`admin/add-stock/${productId}`, updateStock);
  };

  const contextValue = {
    updateResult,
    setUpdateResult,
    deleteProduct,
    addStock,
    updateProduct,
    checkUpdateData,
    setCheckUpdateData,
    updateStock,
    setUpdateStock,
  };
  return (
    <AdminContext.Provider value={contextValue}>
      {children}
    </AdminContext.Provider>
  );
}

import { createContext } from "react";
import axios from "../config/axios";

export const ProductContext = createContext();

export default function ProductContextProvider({ children }) {
  const addToWishlist = async (productDetail) => {
    const res = await axios.post("/product/wishlist", productDetail);
  };

  const addToCart = async (productDetail) => {
    const res = await axios.post("/product/wishlist", productDetail);
  };

  const contextValue = { addToWishlist, addToCart };
  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
}

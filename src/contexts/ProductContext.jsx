import { createContext } from "react";
import axios from "../config/axios";
import { useState } from "react";

export const ProductContext = createContext();

export default function ProductContextProvider({ children }) {
  const [allproducts, setAllProducts] = useState([]);

  const addToWishlist = async (productDetail) => {
    const res = await axios.post("/product/wishlist", productDetail);
  };

  const addToCart = async (productDetail) => {
    const res = await axios.post("/product/cart", productDetail);
  };

  const contextValue = {
    addToWishlist,
    addToCart,
    allproducts,
    setAllProducts,
  };
  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
}

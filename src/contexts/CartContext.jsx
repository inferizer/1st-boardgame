import { createContext } from "react";
import axios from "../config/axios";
import { useState } from "react";

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [checkCartUpdate, setCheckCartUpdate] = useState(false);

  const calcPrice = (productsPrice) => {
    const totalPrice = productsPrice.reduce((acc, item) => {
      const sum = item.quantity * item.productId.price;
      const total = acc + sum;
      return total;
    }, 0);
    return totalPrice;
  };

  const getCartItem = async (userInfo) => {
    const cartItem = await axios.post("/product/get-cart", userInfo);
    setCart(cartItem.data.result);
    const calcTotalPrice = calcPrice(cartItem.data.result);
    setTotalPrice(calcTotalPrice);
    setCheckCartUpdate(false);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const addToCart = async (userId, productId) => {
    await axios.post("/product/cart", { userId, productId });
    setCheckCartUpdate(true);
  };

  const deleteItem = async (itemId) => {
    await axios.delete(`/product/delete-item/${itemId}`);
    setCheckCartUpdate(true);
  };

  const addQuantity = async (itemId) => {
    await axios.patch(`/product/add-quantity/${itemId}`);
    setCheckCartUpdate(true);
  };

  const rmvQuantity = async (itemId) => {
    await axios.patch(`/product/remove-quantity/${itemId}`);
    setCheckCartUpdate(true);
  };

  const contextValue = {
    cart,
    setCart,
    isCartOpen,
    setIsCartOpen,
    toggleCart,
    checkCartUpdate,
    setCheckCartUpdate,
    addToCart,
    getCartItem,
    deleteItem,
    addQuantity,
    rmvQuantity,
    totalPrice,
    setTotalPrice,
  };
  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

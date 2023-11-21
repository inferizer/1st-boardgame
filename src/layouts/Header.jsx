import { Link } from "react-router-dom";

import { CartIcon } from "../icons/Icon";
import { useAuth } from "../hooks/use-auth";
import { useCart } from "../hooks/use-cart";
import logo from "../assets/1stbgLogo.png";
import Button from "../components/Button";
import Menu from "./Menu";

import CartDropDown from "../components/cart/CartDropDown";
import { useLocation } from "react-router-dom";
import SearchProduct from "../features/product/SearchProduct";
import { useEffect } from "react";

export default function Header() {
  const location = useLocation();
  const currentPath = location.pathname;
  const { logout, authUser } = useAuth();
  const {
    isCartOpen,
    toggleCart,
    getCartItem,
    checkCartUpdate,
    setCheckCartUpdate,
  } = useCart();

  useEffect(() => {
    getCartItem(authUser);
  }, [checkCartUpdate, setCheckCartUpdate]);

  return (
    <header className=''>
      <div className='flex gap-40 justify-between items-center py-4 px-36'>
        <img src={logo} alt='logo' className=' h-20' />
        <SearchProduct />
        <div className=' flex justify-center items-center gap-8 z-0'>
          {!authUser ? (
            <Link to='/login'>
              <Button text='Login' />
            </Link>
          ) : (
            <>
              <Link to='/profile'>
                <div className='flex w-16 h-16 border border-greyLight bg-primary text-white rounded-full items-center justify-center '>
                  user
                </div>
              </Link>
              <Button text='Logout' onClick={logout} />
            </>
          )}
          <div
            className='hover:scale-110 relative cursor-pointer'
            onClick={toggleCart}
          >
            {currentPath === "/payment" || !authUser ? null : <CartIcon />}
          </div>
          {isCartOpen && (
            <div className='absolute right-32 top-28 z-50'>
              <CartDropDown />
            </div>
          )}
        </div>
      </div>
      <Menu />
    </header>
  );
}

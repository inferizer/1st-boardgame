import { Link } from "react-router-dom";

import { CartIcon } from "../icons/Icon";
import { useAuth } from "../hooks/use-auth";
import logo from "../assets/1stbgLogo.png";
import Button from "../components/Button";
import Menu from "./Menu";
import Search from "../components/Search";

export default function Header() {
  const { logout, authUser } = useAuth();

  return (
    <header className=''>
      <div className='flex gap-40 justify-between items-center py-4 px-36'>
        <img src={logo} alt='logo' className=' h-20' />
        <Search />
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
          <div className='hover:scale-110'>
            <CartIcon />
          </div>
        </div>
      </div>
      <Menu />
    </header>
  );
}

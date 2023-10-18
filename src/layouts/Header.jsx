import { Link } from "react-router-dom";

import logo from "../assets/1stbgLogo.png";
import Button from "../components/Button";
import Menu from "./Menu";
import { CartIcon } from "../icons/Icon";
import { useState } from "react";
import { useAuth } from "../hooks/use-auth";

export default function Header() {
  const { logout, authUser } = useAuth();
  const { search, setSearch } = useState("");

  const hdlSearch = () => {};

  const hdlKeyUp = (e) => {
    if (e.key === "Enter") {
      hdlSearch();
    }
  };

  return (
    <header className=''>
      <div className='flex gap-40 justify-between items-center py-4 px-36'>
        <img src={logo} alt='logo' className=' h-20' />
        <input
          type='text'
          placeholder='Search for...'
          className=' grow border border-grey rounded-full h-10 p-7 min-w-[400px]'
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          onKeyUp={hdlKeyUp}
        />
        <div className=' flex justify-center items-center gap-8'>
          {!authUser ? (
            <Link to='/login'>
              <Button text='Login' />
            </Link>
          ) : (
            <Button text='Logout' onClick={logout} />
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

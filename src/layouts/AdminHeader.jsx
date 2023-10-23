import { Link } from "react-router-dom";
import logo from "../assets/1stbgLogo.png";
import Button from "../components/Button";
import { useAuth } from "../hooks/use-auth";

export default function AdminHeader() {
  const { logout } = useAuth();
  return (
    <div>
      <div className='flex gap-40 justify-between items-center py-6 px-36 border-b-2 border-greyLight'>
        <img src={logo} alt='logo' className=' h-20' />
        <div>
          <Link to={"/admin"}>
            <div className='text-primary text-2xl'>Home</div>
          </Link>
        </div>
        <div>
          <Link to={"update-product"}>
            <div className='text-primary text-2xl'>Products Management</div>
          </Link>
        </div>
        <div>
          <Link to={"check-order"}>
            <div className='text-primary text-2xl'>Customer Orders</div>
          </Link>
        </div>

        <div className=' flex justify-center items-center gap-8 '>
          <Link to='/login'>
            <Button text='Logout' onClick={logout} />
          </Link>
        </div>
      </div>
    </div>
  );
}

import logo from "../assets/1stbgLogo.png";
import Button from "../components/Button";

export default function AdminHeader() {
  return (
    <div>
      <div className='flex gap-40 justify-between items-center py-6 px-36 border-b-2 border-greyLight'>
        <img src={logo} alt='logo' className=' h-20' />
        <div>
          <div>Icon</div>
          <div>Home</div>
        </div>
        <div>
          <div>Icon</div>
          <div>Products Management</div>
        </div>
        <div>
          <div>Icon</div>
          <div>Customer Orders</div>
        </div>

        <div className=' flex justify-center items-center gap-8 '>
          <span>User Icon</span>
          <Button text='Logout' />
        </div>
      </div>
    </div>
  );
}

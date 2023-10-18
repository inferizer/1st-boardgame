import Button from "../../components/Button";
import Horizontal from "../../assets/test/werewolf.webp";
import Square from "../../assets/test/everdell.jpg";
import Vertical from "../../assets/test/foodchain.jpg";

export default function ProfilePage() {
  return (
    <div>
      <h1 className='font-CopperplateGothic text-5xl font-bold text-primary items-center w-full text-center p-10 '>
        Profile
      </h1>
      {/* ProfileForm */}
      <div className='mx-auto max-w-md flex flex-col gap-6 justify-center items-center text-lg p-6 border-2 border-greyLight shadow-md '>
        <div className='flex flex-col gap-5 w-full'>
          <div className='border-b border-grey'>
            Email :<span className='p-4'>bear@me.com</span>
          </div>
          <div className='border-b border-grey'>
            Password :<span className='p-4 blod'>Secret!!!</span>
          </div>
          <div className='border-b border-grey'>
            Fullname :<span className='p-4'>Menoy Salmon</span>
          </div>
          <div className='border-b border-grey'>
            Mobile :<span className='p-4'>081-4492844</span>
          </div>
          <div className='border-b border-grey'>
            Address :
            <span className='p-4 '>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
              velit omnis, aperiam corporis qui eligendi inventore quia
            </span>
          </div>
        </div>
        <Button text='Edit Profile' />
      </div>
      <h1 className='font-CopperplateGothic text-5xl font-bold text-primary items-center w-full text-center p-10 '>
        Collections
      </h1>
      {/* Display Collection */}
      <div className='grid grid-cols-3 px-60'>
        <div className='mx-auto max-w-screen-xs p-4 bg-white rounded-md '>
          <div>
            <div className='w-full'>
              <img src={Horizontal} alt='bg' className='w-full max-h-60' />
            </div>
          </div>
          <div>
            <h6 className='text-secondary font-bold text-lg p-3'>game title</h6>

            <p className='font-semibold p-3'>Read More...</p>
            <div className='flex items-center justify-between px-5'>
              <h6 className='text-secondary font-bold'>49.00$</h6>
              <div className='flex  justify-center items-center gap-3'></div>
            </div>
          </div>
        </div>
        <div className='mx-auto max-w-screen-xs p-4 bg-white rounded-md '>
          <div>
            <div className='w-full'>
              <img src={Square} alt='bg' className='w-full max-h-60' />
            </div>
          </div>
          <div>
            <h6 className='text-secondary font-bold text-lg p-3'>game title</h6>

            <p className='font-semibold p-3'>Read More...</p>
            <div className='flex items-center justify-between px-5'>
              <h6 className='text-secondary font-bold'>49.00$</h6>
              <div className='flex  justify-center items-center gap-3'></div>
            </div>
          </div>
        </div>
        <div className='mx-auto max-w-screen-xs p-4 bg-white rounded-md '>
          <div>
            <div className='w-full'>
              <img src={Vertical} alt='bg' className='w-full max-h-60' />
            </div>
          </div>
          <div>
            <h6 className='text-secondary font-bold text-lg p-3'>game title</h6>

            <p className='font-semibold p-3'>Read More...</p>
            <div className='flex items-center justify-between px-5'>
              <h6 className='text-secondary font-bold'>49.00$</h6>
              <div className='flex  justify-center items-center gap-3'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

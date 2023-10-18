import LoginImage from "../../assets/login.png";
import LoginForm from "../../features/auth/LoginForm";

export default function LoginPage() {
  return (
    <>
      <div className='flex px-52 py-16'>
        <div className='mb-6'>
          <img src={LoginImage} className='w-[800px] ' />
        </div>
        <div className='text-grayLight mx-auto max-w-[30rem] bg-white rounded-lg shadow-[0_0_15px_rgb(0_0_0_/0.2)] mb-6 px-12 py-14 '>
          <LoginForm />
        </div>
      </div>
    </>
  );
}

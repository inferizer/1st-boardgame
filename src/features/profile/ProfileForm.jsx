import { useAuth } from "../../hooks/use-auth";
import ProfileFormInput from "./ProfileFormInput";

export default function ProfileForm() {
  const { authUser } = useAuth();
  const { email, firstName, lastName, mobile, address } = authUser;

  return (
    <div className='mx-auto max-w-md flex flex-col gap-6 justify-center items-center text-lg p-6 border-2 border-greyLight shadow-md'>
      <div className='flex flex-col gap-5 w-full'>
        {/* Email */}
        <ProfileFormInput title='Email' data={email} name='email' />
        {/* Password */}
        <ProfileFormInput
          title='Password'
          data='***Secret!!!!***'
          name='password'
        />
        {/* Fullname */}
        <ProfileFormInput title='Firstname' data={firstName} name='firstName' />
        <ProfileFormInput title='Lastname' data={lastName} name='lastName' />
        {/* Mobile */}
        <ProfileFormInput title='Mobile' data={mobile} name='mobile' />
        {/* Address */}
        <ProfileFormInput title='Address' data={address} name='address' />
      </div>
    </div>
  );
}

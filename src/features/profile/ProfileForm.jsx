import { useAuth } from "../../hooks/use-auth";
import { useProfile } from "../../hooks/use-profile";
import ProfileFormInput from "./ProfileFormInput";

export default function ProfileForm() {
  const { authUser } = useAuth();
  const { email, firstname, lastname, mobile, address } = authUser;
  const { editProfile } = useProfile();
  console.log(authUser);
  return (
    <div className='mx-auto max-w-md flex flex-col gap-6 justify-center items-center text-lg p-6 border-2 border-greyLight shadow-md'>
      <div className='flex flex-col gap-5 w-full'>
        {/* Email */}
        <ProfileFormInput title='Email' data={email} onEdit={editProfile} />
        {/* Password */}
        <ProfileFormInput title='Password' dataOne='***Secret!!!!***' />
        {/* Fullname */}
        <ProfileFormInput title='Fullname' data={`${firstname} ${lastname}`} />
        {/* Mobile */}
        <ProfileFormInput title='Mobile' data={mobile} />
        {/* Address */}
        <ProfileFormInput title='Address' data={address} />
      </div>
    </div>
  );
}

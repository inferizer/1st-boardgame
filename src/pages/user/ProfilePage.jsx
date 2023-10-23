import HeaderText from "../../components/HeaderText";
import WishList from "../../features/profile/WishList";
import ProfileForm from "../../features/profile/ProfileForm";

export default function ProfilePage() {
  return (
    <div>
      <HeaderText title='Profile' />
      <ProfileForm />
      <HeaderText title='My Wishlist' />
      <WishList />
    </div>
  );
}

import { useProfile } from "../../hooks/use-profile";
import { StoreTextIcon } from "../../icons/Icon";

export default function WishListItem({ id, image, title }) {
  const { setUpdateWishList, removeWishList } = useProfile();
  const hldRemoveWishList = (e) => {
    removeWishList(e.target.id);
    setUpdateWishList(true);
  };

  return (
    <div className='flex items-center justify-center border-b-2 border-greyLight gap-20 px-10 py-3 mx-10 font-bold '>
      <div className='flex gap-20 justify-center items-center w-1/3'>
        <img src={image} alt='bg' className='w-4/5 max-h-40' />
      </div>
      <div className='w-1/4 '>{title}</div>

      <div className='flex'>
        <StoreTextIcon text='D' id={id} onClick={hldRemoveWishList} />
      </div>
    </div>
  );
}

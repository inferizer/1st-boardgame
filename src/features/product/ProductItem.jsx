import { HeartIcon, StoreTextIcon } from "../../icons/Icon";
import useProduct from "../../hooks/use-product";
import { useAuth } from "../../hooks/use-auth";
import { useProfile } from "../../hooks/use-profile";
import { useCart } from "../../hooks/use-cart";

export default function ProductItem({
  id,
  // userId,
  image,
  title,
  description,
  price,
  stock,
}) {
  const { addToCart } = useCart();
  const { allproducts } = useProduct();
  const { authUser } = useAuth();
  const { addToWishList } = useProfile();

  const hdlAddToWishlist = async (e) => {
    try {
      const findItem = allproducts.filter((item) => e.target.id == item.id);
      const [{ id: bgid }] = findItem;
      await addToWishList({ userId: String(authUser.id), productId: bgid });
    } catch (error) {
      console.log(error);
    }
  };

  const hdlAddToCart = async (e) => {
    try {
      const findResult = allproducts.filter((item) => e.target.id == item.id);
      console.log(findResult);
      addToCart(authUser.id, findResult[0].id);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=' max-w-screen-xs p-2 bg-white rounded-md m-3 border border-greyLight'>
      <div>
        <div className='w-full h-60 flex justify-center items-center'>
          <img src={image} alt='bg' className='w-full max-h-60' />
        </div>
      </div>
      <div>
        <h6 className='text-secondary font-bold text-lg p-3'>{title}</h6>
        <p className='text-grey max-h-20 overflow-hidden max-w-xs p-3'>
          {description}
        </p>
        <p className='font-semibold p-3'>Read More...</p>
        <div className='flex items-center justify-between px-5'>
          <h6 className='text-secondary font-bold'>
            {price && price.toLocaleString("en-US")} THB
          </h6>
          <div className='flex justify-center items-center gap-3'>
            <div className='hover:scale-110'>
              <HeartIcon text='+' id={id} onClick={hdlAddToWishlist} />
            </div>
            <StoreTextIcon text='+' id={id} onClick={hdlAddToCart} />
          </div>
        </div>
      </div>
    </div>
  );
}

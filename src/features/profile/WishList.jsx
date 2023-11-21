import { useEffect, useState } from "react";
import WishListItem from "./wishListItem";
import axios from "../../config/axios";
import { useProfile } from "../../hooks/use-profile";
import { useAuth } from "../../hooks/use-auth";
import Loading from "../../components/Loading";

export default function WishList() {
  const { authUser } = useAuth();
  const {
    getWishList,
    setGetWishList,
    checkUpdateWishList,
    setUpdateWishList,
  } = useProfile();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    {
      axios
        .post("profile/get-wishlist", { userId: authUser.id })
        .then((res) => setGetWishList(res.data.result))
        .catch((error) => console.log(error))
        .finally(setLoading(false), setUpdateWishList(false));
    }
  }, [checkUpdateWishList]);

  return (
    <div className='grid grid-cols-3'>
      {loading ? (
        <Loading />
      ) : getWishList &&
        getWishList.user_collections &&
        getWishList.user_collections.length > 0 ? (
        getWishList.user_collections.map((item, index) => (
          <WishListItem
            key={index}
            id={item.id}
            image={item.productId.image}
            title={item.productId.title}
          />
        ))
      ) : null}
    </div>
  );
}

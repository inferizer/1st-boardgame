import { useEffect } from "react";
import axios from "axios";

import useProduct from "../../hooks/use-product";
import ProductItem from "./ProductItem";
import { useAuth } from "../../hooks/use-auth";

export default function ProductContent() {
  const { authUser } = useAuth();
  const { allproducts, setAllProducts } = useProduct();
  console.log(allproducts);
  useEffect(() => {
    {
      axios
        .get("product/get-product")
        .then((res) => setAllProducts(res.data.result))
        .catch((error) => console.log(error));
    }
  }, []);
  return (
    <div className='grid grid-cols-4 gap-3 px-60'>
      {allproducts.map((item, index) =>
        item.price ? (
          <ProductItem
            id={item.id}
            userId={authUser.id}
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            price={item.price}
            stock={item.sotck}
          />
        ) : null
      )}
    </div>
  );
}

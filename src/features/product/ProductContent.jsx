import { useEffect } from "react";
import axios from "axios";

import useProduct from "../../hooks/use-product";
import ProductItem from "./ProductItem";

export default function ProductContent() {
  const { allproducts, setAllProducts } = useProduct();
  // console.log(allproducts);
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
      {allproducts.map((item, index) => (
        <ProductItem
          id={item.id}
          key={index}
          image={item.image}
          title={item.title}
          description={item.description}
          price={item.price}
        />
      ))}
    </div>
  );
}

import { useState } from "react";
import useAdmin from "../../hooks/use-admin";
import { StoreTextIcon } from "../../icons/Icon";

export default function AdminUpdateItem({ id, image, title, stock, price }) {
  const { updateResult, addStock, deleteProduct, setCheckUpdateData } =
    useAdmin();
  const [updateStock, setUpdateStock] = useState(stock || 0);

  const hdldeleteProduct = async (e) => {
    try {
      await deleteProduct(e.target.id);
      setCheckUpdateData(true);
    } catch (error) {
      console.log(error);
    }
  };

  const hdlAddStock = async (e) => {
    try {
      const findItem = updateResult.find(
        (product) => product.id == e.target.id
      );
      if (findItem) {
        const { id } = findItem;
        setUpdateStock((prevStock) => prevStock + 1);
        await addStock(id, updateStock);
        setCheckUpdateData(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='flex items-center justify-center border-b-2 border-greyLight gap-56 px-96 py-10 max-w-7xl mx-auto rounded-md font-bold '>
      <div className='flex gap-20 justify-center items-center'>
        <img src={image} alt='bg' className='w-1/2' />
        <div className='w-52 break-words '>{title}</div>
      </div>
      <div>{stock}</div>
      <div>{price}</div>
      <div className='flex gap-5'>
        <StoreTextIcon text='-' id={id} />
        <StoreTextIcon text='+' id={id} onClick={hdlAddStock} />
        <StoreTextIcon text='E' id={id} />
        <StoreTextIcon text='D' id={id} onClick={hdldeleteProduct} />
      </div>
    </div>
  );
}

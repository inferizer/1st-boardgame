import { useState } from "react";
import useAdmin from "../../hooks/use-admin";
import { StoreTextIcon } from "../../icons/Icon";
import Modal from "../../components/Modal";
import AdminEditProduct from "./AdminEditProduct";

export default function AdminUpdateItem({ id, image, title, stock, price }) {
  const { deleteProduct, setCheckUpdateData } = useAdmin();
  const [isEdit, setIsEdit] = useState(false);
  console.log(price);
  const toggleEdit = () => {
    setIsEdit(!isEdit);
  };

  const hdldeleteProduct = async (e) => {
    try {
      await deleteProduct(e.target.id);
      setCheckUpdateData(true);
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
      <div>{price && price.toLocaleString("en-US")}</div>
      <div className='flex gap-5'>
        <StoreTextIcon text='E' id={id} onClick={toggleEdit} />
        <StoreTextIcon text='D' id={id} onClick={hdldeleteProduct} />
      </div>
      <Modal open={isEdit} onClose={toggleEdit}>
        <AdminEditProduct id={id} setIsEdit={setIsEdit} />
      </Modal>
    </div>
  );
}

import { useState } from "react";
import AdminUpdateItem from "./AdminUpdateItem";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import Search from "../../components/Search";
import useAdmin from "../../hooks/use-admin";

import { useEffect } from "react";
import axios from "axios";

export default function AdminUpdateContent() {
  const [open, setOpen] = useState(false);
  const { updateResult, setUpdateResult, checkUpdateData, setCheckUpdateData } =
    useAdmin();

  useEffect(() => {
    {
      axios
        .get("admin/update-product")
        .then((res) => setUpdateResult(res.data.result));
    }
  }, []);

  useEffect(() => {
    if (checkUpdateData) {
      axios
        .get("admin/update-product")
        .then((res) => setUpdateResult(res.data.result));
    }

    setCheckUpdateData(false);
  }, [checkUpdateData, setCheckUpdateData]);

  return (
    <>
      <div className='flex list-none items-center justify-center gap-56 pr-40 py-10 max-w-7xl mx-auto rounded-md bg-secondary font-bold '>
        <li className='min-w-fit'>Product Detail</li>
        <li>Stock</li>
        <li>Price</li>
        <li className='hidden'>X</li>
      </div>
      {updateResult.map((item, index) => (
        <AdminUpdateItem
          key={index}
          id={item.id}
          image={item.image}
          title={item.title}
          stock={item.stock}
          price={item.price}
        />
      ))}

      <div className='mx-auto p-6 flex items-center justify-center '>
        <Button text='Update Stock' onClick={() => setOpen(true)} />
        <Modal
          title='Add Boardgame Stock'
          maxWidth={44}
          open={open}
          onClose={() => setOpen(false)}
        >
          <div className='flex justify-center items-center'>
            <Search />
          </div>
        </Modal>
      </div>
    </>
  );
}

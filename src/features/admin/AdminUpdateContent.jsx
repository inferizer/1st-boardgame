import { useState } from "react";
import AdminUpdateItem from "./AdminUpdateItem";
import Button from "../../components/Button";
import Modal from "../../components/Modal";

import Horizoltal from "../../assets/test/werewolf.webp";
import ModalForm from "./ModalForm";

export default function AdminUpdateContent() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className='flex list-none items-center justify-center gap-60 pr-40 py-10 max-w-7xl mx-auto rounded-md bg-secondary font-bold '>
        <li className='min-w-fit'>Product Detail</li>
        <li>Stock</li>
        <li>Price</li>
        <li className='hidden'>X</li>
      </div>
      <AdminUpdateItem
        pic={Horizoltal}
        title='Werewolf'
        stock='2'
        price='1,090.00'
      />
      <div className='mx-auto p-6 flex items-center justify-center '>
        <Button text='Update Stock' onClick={() => setOpen(true)} />
        <Modal
          title='Add Boardgame Stock'
          maxWidth={44}
          open={open}
          onClose={() => setOpen(false)}
        >
          <ModalForm />
        </Modal>
      </div>
    </>
  );
}

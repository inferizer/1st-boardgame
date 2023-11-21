import axios from "../../config/axios";
import Button from "../../components/Button";
import InputComponent from "../../components/InputComponent";
import useAdmin from "../../hooks/use-admin";

export default function AdminEditProduct({ id, setIsEdit }) {
  const { updateStock, setUpdateStock } = useAdmin();

  console.log(updateStock);

  const hdlSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/admin/update-stock ", { updateStock, id: e.target.id });
    setIsEdit(false);
    window.location.reload();
  };

  const hdlOnChange = (e) => {
    // console.log(e.target.value);
    // console.log(e.target.name);
    const newUpdateStock = { ...updateStock };
    newUpdateStock[e.target.name] = e.target.value;
    setUpdateStock(newUpdateStock);
  };
  return (
    <form
      className='flex flex-col gap-6 justify-center items-center'
      onSubmit={hdlSubmit}
      id={id}
    >
      <p>Stock Amount</p>
      <InputComponent
        type='text'
        placeholder='stock'
        name='stock'
        onChange={hdlOnChange}
      />
      <p>Product Price</p>
      <InputComponent
        type='text'
        placeholder='price'
        name='price'
        onChange={hdlOnChange}
      />
      <div>
        <Button text='Save' id={id} />
      </div>
    </form>
  );
}

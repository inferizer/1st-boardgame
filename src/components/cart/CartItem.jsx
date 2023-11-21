import { useCart } from "../../hooks/use-cart";
import { StoreTextIcon } from "../../icons/Icon";

export default function CartItem({ id, title, quantity, price, image }) {
  const { deleteItem, addQuantity, rmvQuantity } = useCart();
  return (
    <div className='grid grid-cols-12'>
      <div className='col-span-7'>
        <div className='flex gap-1'>
          <img src={image} alt='bg' className='w-2/5 p-4' />

          <div className='flex flex-col gap-2 items-center justify-center mx-auto'>
            <div className='items-center'>{title}</div>
            <div className='flex gap-4 justify-center items-center'>
              <StoreTextIcon
                text='-'
                id={id}
                onClick={(e) => {
                  rmvQuantity(e.target.id);
                }}
              />
              <div>{quantity}</div>
              <StoreTextIcon
                text='+'
                id={id}
                onClick={(e) => {
                  addQuantity(e.target.id);
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className='col-span-3 flex justify-center items-center'>
        {(price && (price * quantity).toLocaleString("en-US")) || null}
      </div>
      <div className='col-span-1 flex justify-end items-center text-center'>
        <StoreTextIcon
          text='D'
          id={id}
          onClick={(e) => {
            deleteItem(e.target.id);
          }}
        />
      </div>
    </div>
  );
}

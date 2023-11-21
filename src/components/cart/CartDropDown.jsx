import Button from "../Button";
import { useCart } from "../../hooks/use-cart";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

export default function CartDropDown() {
  const { cart, totalPrice, toggleCart } = useCart();

  return (
    <div className='bg-white border border-grey shadow-2xl shadow-grey w-[530px] h-auto rounded-md p-3'>
      <div className='py-2 border-b text-center font-CopperplateGothic text-3xl font-bold'>
        Your Items
      </div>
      <div className='grid grid-cols-1 border-b-2 border-greyLight font-bold '>
        {/* cart item */}
        {cart.length > 0 ? (
          cart.map((el, index) => {
            return (
              <CartItem
                key={index}
                id={el.id}
                title={el.productId.title}
                quantity={el.quantity}
                price={el.productId.price}
                image={el.productId.image}
              />
            );
          })
        ) : (
          <div className='py-10 text-center text-lg font-CopperplateGothic'>
            no items
          </div>
        )}
      </div>

      {/* total price */}
      <div className='flex gap-8 px-14 py-4 font-bold'>
        <div>Total Price : </div>
        <div className='inline-flex gap-4'>
          {totalPrice.toLocaleString("en-US")} <span>THB</span>
        </div>
      </div>
      {/* button */}
      <div className='flex items-center justify-center py-4'>
        <Link to='/payment'>
          <Button text='Process' onClick={toggleCart} />
        </Link>
      </div>
    </div>
  );
}

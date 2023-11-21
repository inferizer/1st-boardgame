import Button from "../../components/Button";
import HeaderText from "../../components/HeaderText";
import CartItem from "../../components/cart/CartItem";
import { useCart } from "../../hooks/use-cart";

export default function PaymentPage() {
  const { cart, totalPrice } = useCart();
  console.log(cart);
  return (
    <>
      <div>
        <HeaderText title='Payment Detail' />
      </div>
      <div className='max-w-3xl mx-auto'>
        <div className='grid grid-cols-1 border-b-2 border-greyLight font-bold mb-2'>
          {cart.map((el, index) => {
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
          })}
          <div className='flex gap-96 px-14 py-4 font-bold text-xl mx-auto'>
            <div>Total Price : </div>
            <div className='inline-flex gap-4'>
              {totalPrice.toLocaleString("en-US")} <span>THB</span>
            </div>
          </div>
          <div className='flex items-center justify-center py-4'>
            <Button text='Payment' />
          </div>
        </div>
      </div>
    </>
  );
}

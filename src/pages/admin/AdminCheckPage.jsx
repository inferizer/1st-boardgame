import { useEffect, useState } from "react";
import HeaderText from "../../components/HeaderText";
import axios from "axios";

export default function AdminCheckPage() {
  const [getAllOrders, setGetAllOrders] = useState([]);
  useEffect(() => {
    axios.get("/admin/order").then((res) => setGetAllOrders(res.data.result));
  }, []);
  return (
    <>
      <HeaderText title='Customer Order' />
      {/* Table Header */}
      <div className='grid grid-cols-6 px-10'>
        <div className='border border-grey bg-greyLight text-center font-bold text-xl'>
          Oreder no.
        </div>
        <div className='border border-grey bg-greyLight text-center font-bold text-xl'>
          Email
        </div>
        <div className='border border-grey bg-greyLight text-center font-bold text-xl'>
          Item
        </div>
        <div className='border border-grey bg-greyLight text-center font-bold text-xl'>
          Total price
        </div>
        <div className='border border-grey bg-greyLight text-center font-bold text-xl'>
          Payment status
        </div>
        <div className='border border-grey bg-greyLight text-center font-bold text-xl'>
          Tracking no.
        </div>
        {/* Table Content */}
        {!getAllOrders.length > 0 ? (
          <p className='w-full text-center col-span-6 p-4 font-bold'>
            No Order
          </p>
        ) : (
          getAllOrders.map((item, index) => {
            <>
              {" "}
              <div className='border border-grey text-center'>oreder no.</div>
              <div className='border border-grey text-center'>email</div>
              <div className='border border-grey text-center'>item</div>
              <div className='border border-grey text-center'>total price</div>
              <div className='border border-grey text-center'>
                payment status
              </div>
              <div className='border border-grey text-center'>tracking no.</div>
            </>;
          })
        )}
      </div>
    </>
  );
}

import { TextIcon, HeartIcon } from "../../icons/Icon";

export default function ProductItem({ pic, title, description, price }) {
  return (
    <div className='mx-auto max-w-screen-xs p-4 bg-white rounded-md '>
      <div>
        <div className='w-full'>
          <img src={pic} alt='bg' className='w-full max-h-60' />
        </div>
      </div>
      <div>
        <h6 className='text-secondary font-bold text-lg p-3'>{title}</h6>
        <p className='text-grey max-h-20 overflow-hidden max-w-xs p-3'>
          {description}
        </p>
        <p className='font-semibold p-3'>Read More...</p>
        <div className='flex items-center justify-between px-5'>
          <h6 className='text-secondary font-bold'>{price}</h6>
          <div className='flex  justify-center items-center gap-3'>
            <HeartIcon />
            <TextIcon text='+' />
          </div>
        </div>
      </div>
    </div>
  );
}

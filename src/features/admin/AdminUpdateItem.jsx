import { TextIcon } from "../../icons/Icon";

export default function AdminUpdateItem({ pic, title, stock, price }) {
  return (
    <div className='flex items-center justify-center border-b-2 border-greyLight gap-60 px-96 py-10 max-w-7xl mx-auto rounded-md font-bold '>
      <div className='flex gap-20 justify-center items-center'>
        <img src={pic} alt='bg' className='w-1/2' />
        <div className='w-52 break-words '>{title}</div>
      </div>
      <div>{stock}</div>
      <div>{price}</div>
      <div className='flex gap-5'>
        <TextIcon text='-' />
        <TextIcon text='+' />
      </div>
    </div>
  );
}

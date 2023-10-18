import Button from "../../components/Button";

export default function ModalForm() {
  const hdlSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className='grid grid-cols gap-4 items-center' onSubmit={hdlSubmit}>
      <div className='flex gap-1 items-center'>
        <label htmlFor='title'>Title: </label>
        <input
          type='text'
          id='title'
          name='title'
          className='border border-grey rounded-md p-2'
        ></input>
      </div>
      <div className='flex gap-1 items-center'>
        <label htmlFor='stock'>Stock: </label>
        <input
          type='text'
          id='stock'
          name='stock'
          className='border border-grey rounded-md p-2'
        ></input>
      </div>
      <div className='flex gap-1 items-center'>
        <label htmlFor='price'>Price: </label>
        <input
          type='text'
          id='price'
          name='price'
          className='border border-grey rounded-md p-2'
        ></input>
      </div>
      <div className='flex gap-1 items-center'>
        <label htmlFor='description'>Description: </label>
        <input
          type='text'
          id='description'
          name='description'
          className='border border-grey rounded-md w-full p-2'
        ></input>
      </div>
      <div className='w-1/5 mx-auto'>
        <Button text='Add' />
      </div>
    </form>
  );
}

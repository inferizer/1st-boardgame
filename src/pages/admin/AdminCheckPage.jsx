export default function AdminCheckPage() {
  return (
    <>
      <h1 className='font-CopperplateGothic text-5xl font-bold text-primary items-center w-full text-center p-10'>
        Customer Order
      </h1>
      {/* Table Header */}
      <div className='grid grid-cols-6 px-10'>
        <div className='border border-grey bg-greyLight text-center'>
          oreder no.
        </div>
        <div className='border border-grey bg-greyLight text-center'>email</div>
        <div className='border border-grey bg-greyLight text-center'>item</div>
        <div className='border border-grey bg-greyLight text-center'>
          total price
        </div>
        <div className='border border-grey bg-greyLight text-center'>
          payment status
        </div>
        <div className='border border-grey bg-greyLight text-center'>
          tracking no.
        </div>
        {/* Table Content */}
        <div className='border border-grey text-center'>oreder no.</div>
        <div className='border border-grey text-center'>email</div>
        <div className='border border-grey text-center'>item</div>
        <div className='border border-grey text-center'>total price</div>
        <div className='border border-grey text-center'>payment status</div>
        <div className='border border-grey text-center'>tracking no.</div>
        <div className='border border-grey text-center'>oreder no.</div>
        <div className='border border-grey text-center'>email</div>
        <div className='border border-grey text-center'>item</div>
        <div className='border border-grey text-center'>total price</div>
        <div className='border border-grey text-center'>payment status</div>
        <div className='border border-grey text-center'>tracking no.</div>
      </div>
    </>
  );
}

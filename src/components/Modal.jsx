export default function Modal({
  title,
  children,
  maxWidth = 27,
  open,
  onClose,
}) {
  return (
    <>
      {open && (
        <>
          <div className='fixed inset-0 bg-grey opacity-80 z-20'></div>
          <div className='fixed inset-0 z-30'>
            <div className='flex justify-center items-center min-h-full p-4'>
              <div
                className=' rounded-lg w-full bg-white shadow-2xl border-1 border-greyLight'
                style={{ maxWidth: `${maxWidth}rem` }}
              >
                {/* modal header */}
                <div className='flex justify-between p-4 text-xl border-b-2 border-greyLight'>
                  <div className='invisible'>X</div>
                  <div className='font-bold font-CopperplateGothic'>
                    {title}
                  </div>
                  <div
                    className='text-gray-800 cursor-pointer'
                    onClick={onClose}
                  >
                    X
                  </div>
                </div>
                {/* modal body */}
                <div className='p-4'>{children}</div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

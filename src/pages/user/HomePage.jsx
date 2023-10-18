import HomeImage from "../../assets/home.png";
import Button from "../../components/Button";

export default function HomePage() {
  return (
    <>
      <div className='mx-auto items-center px-40 py-20'>
        <img src={HomeImage} alt='bg' className='rounded-2xl w-full' />
        <div className='absolute right-60 top-3/4  flex flex-col gap-10 justify-center items-center'>
          <h1 className='font-CopperplateGothic text-6xl text-red '>
            Explore a universe of board games
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
            phasellus mollis sit aliquam sit nullam neque ultrices.
          </p>
          <div>
            <Button text='Join Us' />
          </div>
        </div>
      </div>
      {/* Our Boardgames */}
      <div>
        <h1 className='font-CopperplateGothic text-6xl '>Our Boardgames</h1>
      </div>
      <div>
        <div>
          <img src='' alt='BG' />
        </div>
        <div>Recomend Boardgame</div>
      </div>
      <div>
        <h1 className='font-CopperplateGothic text-6xl '>Our Products</h1>
      </div>
      <div>
        <h1 className='font-CopperplateGothic text-6xl '>
          Frequently Asked Questions
        </h1>
      </div>
    </>
  );
}

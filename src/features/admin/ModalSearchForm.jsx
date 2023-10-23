import Swal from "sweetalert2";
import { TextIcon, HeartIcon } from "../../icons/Icon";
import useAdmin from "../../hooks/use-admin";
export default function ModalSearchForm({ itemModal }) {
  const { setCheckUpdateData } = useAdmin();

  const {
    $: { id: bggId },
    name: title,
    yearpublished: {
      $: { value: yearpublished },
    },
    description,
    image,
  } = itemModal;

  const { updateProduct } = useAdmin();

  const hdlUpdateProduct = async () => {
    try {
      await updateProduct({ bggId, title, yearpublished, image, description });
      setCheckUpdateData(true);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className='mx-auto max-w-screen-xs p-4 bg-white rounded-md flex flex-col justify-center items-center'>
        <div>
          <div>
            <img src={image} alt='bg' className='w-full max-h-96' />
          </div>
        </div>
        <div>
          <h6 className='font-bold text-lg p-3'>
            {`${title} (${yearpublished})`}
          </h6>

          <div className='flex items-center justify-between px-5'>
            <div className='flex mx-auto justify-center items-center gap-3'>
              <HeartIcon />
              <TextIcon text='+' onClick={hdlUpdateProduct} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

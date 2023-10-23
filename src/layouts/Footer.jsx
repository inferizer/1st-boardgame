import { FacebookIcon, IgIcon, X } from "../icons/Icon";

export default function Footer() {
  return (
    <footer className='flex gap-20 items-center justify-center bg-primary mt-5 py-10 text-[16px] w-full'>
      {/* fixed bottom-0 w-full */}
      <div className='text-white'>
        Copyright &copy; 2022-2023 1ST-BOARDGAME | All Rights Reserved
      </div>
      <div className='flex gap-12 list-none text-white '>
        <li>
          <FacebookIcon />
        </li>
        <li>
          <X />
        </li>
        <li>
          <IgIcon />
        </li>
        <li>IN</li>
        <li>YT</li>
      </div>
    </footer>
  );
}

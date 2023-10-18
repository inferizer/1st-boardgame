import Horizontal from "../../assets/test/werewolf.webp";

import ProductItem from "./ProductItem";

export default function ProductContent() {
  return (
    <div className='grid grid-cols-3 px-60'>
      <ProductItem
        pic={Horizontal}
        title='Werewolf'
        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem maiores rerum doloremque voluptate natus, iure voluptatum error ipsa aliquam, repellendus sint aliquid reiciendis obcaecati vel, atque dignissimos voluptas asperiores quidem.'
        price='49.00$'
      />
      <ProductItem />
    </div>
  );
}

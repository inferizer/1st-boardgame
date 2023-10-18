import ProductContent from "../../features/product/ProductContent";

export default function ProductPage() {
  return (
    <div className='mx-auto items-center'>
      <h1 className='font-CopperplateGothic text-5xl font-bold text-primary items-center w-full text-center p-10'>
        Our Products
      </h1>
      <ProductContent />
    </div>
  );
}

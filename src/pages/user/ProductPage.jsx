import HeaderText from "../../components/HeaderText";
import ProductContent from "../../features/product/ProductContent";

export default function ProductPage() {
  return (
    <div className='mx-auto items-center'>
      <HeaderText title='Product' />
      <ProductContent />
    </div>
  );
}

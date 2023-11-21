export default function InputComponent({ onChange, name }) {
  return (
    <input
      type='text'
      name={name}
      placeholder={name}
      className='border p-3 rounded-xl'
      onChange={onChange}
    />
  );
}

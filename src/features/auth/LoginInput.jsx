export default function LoginInput({
  type = "text",
  placeholder,
  value,
  name,
  onChange,
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      className='block w-full rounded-md px-4 py-3 outline-none border border-gray focus:ring border-primary focus:ring-secondary'
    />
  );
}

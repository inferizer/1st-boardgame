export default function RegisterInput({
  type = "text",
  placeholder,
  value,
  onChange,
  name,
  hasError,
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      className={`block w-full rounded-md px-4 py-3 outline-none border border-gray focus:ring ${
        hasError
          ? "border-red500 focus:ring-red300"
          : "border-primary focus:ring-secondary"
      }`}
    />
  );
}

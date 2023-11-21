import MenuItem from "./MenuItem";

export default function Menu() {
  const items = [
    ["Home", "/"],
    ["About Us", ""],
    // ["Categories", "/"],
    ["Products", "/product"],
  ];
  return (
    <nav className='list-none flex gap-36 justify-center px-48 py-4 bg-greyLight text-secondary text-[20px] font-bold'>
      <>
        {items.map((item, index) => (
          <MenuItem key={index} title={item[0]} to={item[1]} />
        ))}
      </>
    </nav>
  );
}

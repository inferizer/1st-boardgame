import { Link } from "react-router-dom";

export default function MenuItem({ title, to = "null" }) {
  return (
    <Link to={to}>
      <li className='transform hover:scale-110 hover:underline'>{title}</li>
    </Link>
  );
}

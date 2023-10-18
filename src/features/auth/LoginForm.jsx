import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import Button from "../../components/Button";
import { useAuth } from "../../hooks/use-auth";
import LoginInput from "./LoginInput";
import { Link } from "react-router-dom";

export default function LoginForm() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const { login } = useAuth();
  const navigate = useNavigate();

  const hldChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const hdlSubmitForm = (e) => {
    e.preventDefault();
    login(input)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data.message,
        });
      });
  };

  return (
    <form className='flex flex-col gap-8' onSubmit={hdlSubmitForm}>
      <LoginInput
        placeholder='Email'
        value={input.email}
        onChange={hldChangeInput}
        name='email'
      />
      <LoginInput
        type='password'
        placeholder='Password'
        value={input.password}
        onChange={hldChangeInput}
        name='password'
      />
      <div className='flex flex-col gap-5 '>
        <Button text='Login' />
        <Link to='/register'>
          <Button text='Register' extend='w-full' />
        </Link>
      </div>
    </form>
  );
}

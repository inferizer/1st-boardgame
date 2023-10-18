import { useState } from "react";
import Joi from "joi";
import Swal from "sweetalert2";

import { useAuth } from "../../hooks/use-auth";
import Button from "../../components/Button";
import RegisterInput from "./RegisterInput";

const registerSchema = Joi.object({
  email: Joi.string().email({ tlds: false }).required(),
  password: Joi.string()
    .pattern(/^[a-zA-Z0-9]{6,30}$/)
    .trim()
    .required(),
  confirmPassword: Joi.string().valid(Joi.ref("password")).trim().required(),
});

const validateRegister = (input) => {
  const { error } = registerSchema.validate(input, { abortEarly: false });
  if (error) {
    const result = error.details.reduce((acc, el) => {
      const { message, path } = el;
      acc[path[0]] = message;
      return acc;
    }, {});
    return result;
  }
};

export default function RegisterForm() {
  const [input, setInput] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState({});

  const { register } = useAuth();

  const hldChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const hdlSubmit = (e) => {
    e.preventDefault();
    const validationError = validateRegister(input);
    if (validationError) {
      return setError(validationError);
    }
    setError({});
    register(input).catch((error) => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data.message,
      });
    });
  };

  return (
    <form className='flex flex-col gap-5' onSubmit={hdlSubmit}>
      <RegisterInput
        placeholder='Email'
        value={input.email}
        onChange={hldChangeInput}
        hasError={error.email}
        name='email'
      />
      <RegisterInput
        type='password'
        placeholder='Password'
        value={input.password}
        onChange={hldChangeInput}
        hasError={error.password}
        name='password'
      />
      <RegisterInput
        type='password'
        placeholder='Confirm Password'
        value={input.confirmPassword}
        onChange={hldChangeInput}
        hasError={error.confirmPassword}
        name='confirmPassword'
      />

      <Button text='Register' />
    </form>
  );
}

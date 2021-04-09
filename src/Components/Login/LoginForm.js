import React from "react";
import { Link } from "react-router-dom";
import SignUp from "./SignUp";
import Button from "./formComponents/Button/Button";
import Input from "./formComponents/Input/Input";
import useForm from "../../Hooks/useForm";
import { UserContext } from "../../UserContext";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validateField() && password.validateField()) {
      userLogin(username.value, password.value)
    }
  }

  return (
    <section>
      <h1>Login</h1>

      <form action="" onSubmit={handleSubmit}>
        <Input name="username" label="username" type="text" {...username} />
        <Input name="password" label="password" type="password" {...password} />

        <Button>Entrar</Button>
      </form>

      <Link to="/login/SignUp" element={<SignUp />}>
        Create an Account
      </Link>
    </section>
  );
};

export default LoginForm;

import React from "react";
import { Link } from "react-router-dom";
import SignUp from "./SignUp";
import Button from "./formComponents/Button/Button";
import Input from "./formComponents/Input/Input";
import useForm from "../../Hooks/useForm";
import { TOKEN_POST, GET_USER } from "../../api";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  React.useEffect(() =>{
    const token = window.localStorage.getItem('token');
    if(token){
      getUser(token);
    }
  }, []);


  async function getUser(token){
    const {url, options} = GET_USER(token);
    const response = await fetch(url, options);
    const json = await response.json();
    console.log(json);
  }


  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validateField() && password.validateField()) {
      const { url, options } = TOKEN_POST({
        username: username.value,
        password: password.value,
      });

      const response = await fetch(url, options);
      const json = await response.json();
      window.localStorage.setItem("token", json.token);
      getUser(json.token);
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

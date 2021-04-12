import React from "react";
import { Link } from "react-router-dom";
import SignUp from "./SignUp";
import Button from "./formComponents/Button/Button";
import Input from "./formComponents/Input/Input";
import useForm from "../../Hooks/useForm";
import Error from '../Helper/error';
import { UserContext } from "../../UserContext";
import styles from "./LoginForm.module.css";
import stylesBtn from "../Login/formComponents/Button/Button.module.css";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = React.useContext(UserContext);
  
  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validateField() && password.validateField()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Username" type="text" name="username" {...username} />
        <Input label="Password" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Loading...</Button>
        ) : (
          <Button>Enter</Button>
        )}
        <Error error={error} />
      </form>
      <Link className={styles.forgot} to="/login/forgot-password">Forgot password?</Link>

      <div className={styles.register}>
          <h2 className={styles.subtitle}>Create an Account</h2>
          <p>Doesn't have an account? Sign up!</p>
          <Link className={stylesBtn.button} to="/login/SignUp" element={<SignUp />}>
            Create an Account
          </Link>
      </div>
    </section>
  );
};

export default LoginForm;

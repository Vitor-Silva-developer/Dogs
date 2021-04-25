import React from "react";

import Input from "./formComponents/Input/Input";
import Button from "./formComponents/Button/Button";
import useForm from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";
import { RESET_PASSWORD } from "../../Api/api";
import Error from "../Helper/error";
import { useNavigate } from "react-router";
import Head from "../Helper/Head";

const PasswordReset = () => {
  const [login, setLogin] = React.useState("");
  const [key, setKey] = React.useState("");
  const password = useForm();
  const { error, loading, request } = useFetch();
  const navigate = useNavigate();

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get("key");
    const login = params.get("login");
    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    if (password.validateField()) {
      const { url, options } = RESET_PASSWORD({
        login,
        key,
        password: password.value,
      });
      const { response } = await request(url, options);
      if (response.ok) navigate("/login");
    }
  }

  return (
    <section className="animeLeft">
      <Head title="Reset password" />
      <h1 className="title"> Create a new password</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="new Password"
          type="password"
          name="password"
          {...password}
        />
        {loading ? (
          <Button disabled>Loading...</Button>
        ) : (
          <Button>Submit</Button>
        )}
      </form>
      <Error error={error} />
    </section>
  );
};

export default PasswordReset;

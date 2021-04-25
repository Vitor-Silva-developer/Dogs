import React from "react";
import Input from "./formComponents/Input/Input";
import Button from "./formComponents/Button/Button";
import useForm from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";
import { LOST_PASSWORD } from "../../Api/api";
import Error from "../Helper/error";
import Head from "../Helper/Head";

const ForgotPassword = () => {
  const login = useForm();

  const { data, loading, error, request } = useFetch();

  function handleSubmit(event) {
    event.preventDefault();
    console.log(data)

    if (login.validateField()) {
      const { url, options } = LOST_PASSWORD({
        login: login.value,
        url: 'http://localhost:3000/login/reset',
      });
      request(url, options);
    }
  }

  return (
    <section>
      <Head title="Lost password" />
      <h1 className="title">Forgot you password?</h1>
      {data ? (
        <p style={{ color: "#4c1" }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email / User" type="text" name="login" {...login} />
          {loading ? (
            <Button disabled>Sending...</Button>
          ) : (
            <Button>Send Email</Button>
          )}
          <Error error={error} />
        </form>
      )}
    </section>
  );
};

export default ForgotPassword;

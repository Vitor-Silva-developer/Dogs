import React from "react";
import { Navigate, Route, Routes } from "react-router";
import LoginForm from "./LoginForm";
import SignUp from "./SignUp";
import ForgotPassword from "./ForgotPassword";
import PasswordReset from "./PasswordReset";
import styles from "./Login.module.css";
import { UserContext } from "../../UserContext";
import NotFound from "../NotFound";

const Login = () => {
  const { login } = React.useContext(UserContext);
  if (login === true) return <Navigate to="/account" />;
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="SignUp" element={<SignUp />} />
          <Route path="ForgotPassword" element={<ForgotPassword />} />
          <Route path="PasswordReset" element={<PasswordReset />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;

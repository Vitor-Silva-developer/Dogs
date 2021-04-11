import React from "react";
import { Navigate, Route, Routes } from "react-router";
import LoginForm from "./LoginForm";
import SignUp from "./SignUp";
import LostPassword from "./LostPassword";
import PasswordReset from "./PasswordReset";
import { UserContext } from "../../UserContext";

const Login = () => {
  const { login } = React.useContext(UserContext);
  if (login === true) return <Navigate to="/account" />;
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="SignUp" element={<SignUp />} />
        <Route path="LostPassword" element={<LostPassword />} />
        <Route path="PasswordReset" element={<PasswordReset />} />
      </Routes>
    </div>
  );
};

export default Login;

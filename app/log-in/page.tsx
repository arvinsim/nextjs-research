import React from "react";
import { redirect } from 'next/navigation'
import LoginForm from "@/_components/LoginForm";

function LoginPage() {
  return (
    <div>
      <h1 className="text-2xl">Login Form</h1>
      <LoginForm />
    </div>
  );
}

export default LoginPage;

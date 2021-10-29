import { Header } from "../components/Header";
import { RegisterForm } from "../components/RegisterForm";
import * as React from "react";

export const Register: React.FC = () => (
  <article className="grid">
    <Header text="Register" />
    <RegisterForm />
  </article>
);

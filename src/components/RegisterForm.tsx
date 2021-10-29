import "../styles/components-style/form.scss";
import * as React from "react";
import { Link } from "react-router-dom";

export const RegisterForm: React.FC = () => (
  <section className="form register-form">
    <div className="login-field">
      <input placeholder="Username..." type="text" />
      <input placeholder="Password..." type="password" />
      <input placeholder="Email..." type="email" />
    </div>
    <div className="buttons">
      <Link to="/register">
        <button className="register btn">Register</button>
      </Link>
    </div>
  </section>
);

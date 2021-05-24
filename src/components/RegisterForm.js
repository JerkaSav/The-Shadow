import { Link } from 'react-router-dom';
function RegisterFrom() {
  return (
    <section className="form register-form">
      <div className="login-field">
        <input placeholder="Username..." type="text" />
        <input placeholder="Password..." type="password" />
        <input placeholder="Email..." type="email" />
      </div>
      <div className="buttons">
        <Link to="/register">
          <button className="register">Register</button>
        </Link>
      </div>
    </section>
  );
}

export default RegisterFrom;

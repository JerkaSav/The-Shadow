import '../styles/components-style/form.scss';

import { Link } from 'react-router-dom';

function Form({ text }) {
  return (
    <section className="form landing-page">
      <h3>{text}</h3>
      <div className="login-field">
        <input placeholder="Username..." />
        <input placeholder="Password..." />
      </div>
      <div className="buttons">
        <button className="login btn">Login</button>
        <Link to="/register">
          <button className="register btn">Register</button>
        </Link>
      </div>
      <div className="no-account">
        <h4>Or play with no account</h4>
        <Link to="/onboarding">
          <button className="btn">No account</button>
        </Link>
      </div>
    </section>
  );
}

export default Form;

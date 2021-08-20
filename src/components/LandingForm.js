import '../styles/components-style/form.scss';

import { Link } from 'react-router-dom';
import { useRef, useEffect } from 'react';

function Form({ text }) {
  const myRef = useRef('scrollHere');
  useEffect(() => {
    const scroll = setTimeout(() => {
      myRef.current.scrollIntoView({ behavior: 'smooth' });
    }, 3000);
    return () => clearTimeout(scroll);
  }, []);
  return (
    <section className="form">
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
          <button className="btn " ref={myRef}>
            No account
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Form;

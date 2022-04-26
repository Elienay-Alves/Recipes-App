import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    const regex = /\S+@\S+\.\S+/;
    const emailValidation = regex.test(email);
    const MIN_LENGTH = 6;
    const passwordValidation = password.length > MIN_LENGTH;
    const validate = emailValidation && passwordValidation;
    setDisabled(!validate);
  }, [email, password]);

  const handleButton = () => {
    localStorage.setItem('mealsToken', '1');
    localStorage.setItem('cocktailsToken', '1');
    localStorage.setItem('user', JSON.stringify({ email }));
  };

  return (
    <main>
      <h1>Login</h1>
      <input
        type="text"
        data-testid="email-input"
        value={ email }
        onChange={ (e) => setEmail(e.target.value) }
      />
      <input
        type="password"
        data-testid="password-input"
        value={ password }
        onChange={ (e) => setPassword(e.target.value) }
      />
      <Link to="/foods">
        <button
          type="button"
          data-testid="login-submit-btn"
          disabled={ disabled }
          onClick={ handleButton }
        >
          Enter
        </button>
      </Link>

    </main>
  );
}

export default Login;

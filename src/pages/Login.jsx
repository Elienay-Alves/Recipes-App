import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);

  const inputsValidate = () => {
    const regex = /\S+@\S+\.\S+/;
    const emailValidation = regex.test(email);
    const MIN_LENGTH = 5;
    const passwordValidation = password.length > MIN_LENGTH;
    const validate = emailValidation && passwordValidation;
    setDisabled(!validate);
  };

  return (
    <main>
      <h1>Login</h1>
      <input
        type="text"
        data-testid="email-input"
        value={ email }
        onChange={ (e) => {
          setEmail(e.target.value);
          inputsValidate();
        } }
      />
      <input
        type="password"
        data-testid="password-input"
        value={ password }
        onChange={ (e) => {
          setPassword(e.target.value);
          inputsValidate();
        } }
      />
      <button
        type="button"
        data-testid="login-submit-btn"
        disabled={ disabled }
      >
        Enter
      </button>
    </main>
  );
}

export default Login;

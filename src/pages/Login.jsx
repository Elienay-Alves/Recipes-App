import React from 'react';

function Login() {
  return (
    <main>
      <h1>Login</h1>
      <input type="text" data-testid="email-input" />
      <input type="password" data-testid="password-input" />
      <button type="button" data-testid="login-submit-btn">Enter</button>
    </main>
  );
}

export default Login;

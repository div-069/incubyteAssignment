import React from 'react';

const Login = () => {
  return (
    <div style={{ padding: '1rem' }}>
      <h2>Login Page</h2>
      <form>
        <div>
          <label>Email: </label>
          <input type="email" name="email" />
        </div>
        <div>
          <label>Password: </label>
          <input type="password" name="password" />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

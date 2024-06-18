// Login.js
import React from 'react';
import './Page.css'; // Import CSS for styling

const Login = () => {
  return (
    <div className="page-container">
      <div className="page-content">
        <h2>Login</h2>
        <form>
          <label>Email:</label>
          <input type="email" />
          <label>Password:</label>
          <input type="password" />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;

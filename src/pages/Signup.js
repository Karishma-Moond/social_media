// Signup.js
import React from 'react';
import './Page.css'; // Import CSS for styling

const Signup = () => {
  return (
    <div className="page-container">
      <div className="page-content">
        <h2>Sign Up</h2>
        <form>
          <label>Email:</label>
          <input type="email" />
          <label>Password:</label>
          <input type="password" />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;

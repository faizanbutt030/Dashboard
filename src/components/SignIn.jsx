import React from 'react';

const SignIn = () => {
  return (
    <div className="auth-container">
      <h2>Sign In</h2>
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;

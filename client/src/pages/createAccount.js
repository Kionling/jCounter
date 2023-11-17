import React, { useState } from 'react';
import 'materialize-css/dist/css/materialize.min.css';

function CreateAccount() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle account creation logic here
    console.log('Creating account with:', username, email, password, confirmPassword);
  };

  return (
    <div className="container" style={{ marginTop: '50px', width: '400px' }}>
      <form onSubmit={handleSubmit}>
        <div className="card">
          <div className="card-content">
            <span className="card-title">Create Account</span>
            <div className="input-field">
              <input 
                id="username" 
                type="text" 
                className="validate" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label htmlFor="username">Username</label>
            </div>
            <div className="input-field">
              <input 
                id="email" 
                type="email" 
                className="validate" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="email">Email</label>
            </div>
            <div className="input-field">
              <input 
                id="password" 
                type="password" 
                className="validate" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="password">Password</label>
            </div>
            <div className="input-field">
              <input 
                id="confirm_password" 
                type="password" 
                className="validate" 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <label htmlFor="confirm_password">Confirm Password</label>
            </div>
          </div>
          <div className="card-action">
            <button type="submit" className="btn waves-effect waves-light">Create Account</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateAccount;

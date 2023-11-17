import React, { useState } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import API from "../API/api"
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here

    console.log('Logging in with:', username, password);
  };

  return (
    <div className="container" style={{ marginTop: '50px', width: '400px' }}>
      <form onSubmit={handleSubmit}>
        <div className="card">
          <div className="card-content">
            <span className="card-title">Login</span>
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
                id="password" 
                type="password" 
                className="validate" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <div className="card-action">
            <button type="submit" className="btn waves-effect waves-light">Login</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;

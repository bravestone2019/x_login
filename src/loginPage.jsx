
import React, { useState } from 'react';

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false); 
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if (username === 'user' && password === 'password') {
        setIsLoggedIn(true); 
        setErrorMessage('');
      } else {
        setErrorMessage('Invalid username or password.');
      }
    };
  
    return (
      <div>
        <h1>Login Page</h1>
        {errorMessage && <p>{errorMessage}</p>}
        {isLoggedIn ? (
          <h2>Welcome, user!</h2> //s
        ) : (
          <form onSubmit={handleSubmit}>
            <div>
              <label>
                Username:
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </label>
            </div>
            <div>
              <label>
                Password:
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </label>
            </div>
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    );
}

export default LoginPage;
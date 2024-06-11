import React, { useState } from 'react';

function Register({ onRegister, onSwitchToLogin }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      const userData = { username, email, password };
      onRegister(userData);
    } else {
      alert('Passwords do not match!');
    }
  };

  return (
    <div className="register-background">
      <div className="contenedor">
        <form onSubmit={handleSubmit}>
          <h2>Register</h2>
          <div className="input-contenedor">
            <input
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label>Username</label>
          </div>

          <div className="input-contenedor">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Email</label>
          </div>

          <div className="input-contenedor">
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Password</label>
          </div>

          <div className="input-contenedor">
            <input
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <label>Confirm Password</label>
          </div>

          <button type="submit">Register</button>
        </form>
        <p>
          I already have an account <a href="#" onClick={onSwitchToLogin}>Log in</a>
        </p>
      </div>
    </div>
  );
}

export default Register;

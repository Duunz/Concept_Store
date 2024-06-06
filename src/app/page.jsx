// src/app/page.jsx
"use client"; // Agrega esta línea

import React, { useState } from 'react';
import './styles/HomePage.css';
import './styles/Login.css';
import './styles/Register.css';
import Login from './components/Login';
import Register from './components/Register';
import HomePage from './components/HomePage';

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
    setIsRegistering(false);
  };

  const handleRegister = (userData) => {
    setUser(userData);
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      {!isLoggedIn && !isRegistering && (
        <Login onLogin={handleLogin} onSwitchToRegister={() => setIsRegistering(true)} />
      )}
      {!isLoggedIn && isRegistering && (
        <Register onRegister={handleRegister} onSwitchToLogin={() => setIsRegistering(false)} />
      )}
      {isLoggedIn && <HomePage user={user} onLogout={handleLogout} />}
    </div>
  );
}

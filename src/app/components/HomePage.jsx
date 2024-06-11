

import React from 'react';


function HomePage({ user, onLogout }) {
  return (
    <div className="home-background">
      <div className="contenedor">
        <h2>Welcome, {user.username}!</h2>
        <button onClick={onLogout}>Logout</button>
      </div>
    </div>
  );
}

export default HomePage;

// src/app/layout.jsx
"use client"; // Agrega esta línea


import './styles/HomePage.css';
import './styles/Login.css';
import './styles/Register.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/src/app/favicon.ico" />
        <title>My Next.js App</title>
      </head>
      <body>{children}</body>
    </html>
  );
}

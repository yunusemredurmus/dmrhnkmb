import React from "react";
import "../css/navbar.css";
export const Navbar = () => {
  return (
    <nav className="mainNavbar">
      <div className="Navbar">
        <div className="logo">
          <h1>DEMIRHAN KOMBI</h1>
        </div>
        <div className="menu">
          <a href="/">Anasayfa</a>
          <a href="/">Hakkımızda</a>
          <a id="buttonIlet" href="/">İletişim</a>
        </div>
      </div>
    </nav>
  );
};

import React from "react";
import "../css/navbar.css";

export const Navbar = () => {
  const telefonNumarasi = "+905446462061"; // Telefon numaranızı burada belirtin

  const handleAraClick = () => {
    window.location.href = "tel:" + telefonNumarasi;
  };

  return (
    <nav className="mainNavbar">
      <div className="Navbar">
        <div className="logo">
          <img src="./logo.png" alt="logo" />{" "}
        </div>
        <div className="menu">
          <a href="/">Anasayfa</a>
          <a href="/">Hakkımızda</a>
          <a id="buttonIlet" href="/">
            İletişim
          </a>
          <button id="phone" onClick={handleAraClick}>
            Ara
          </button>
        </div>
      </div>
    </nav>
  );
};

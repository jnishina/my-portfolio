import React from "react";

const NavBar = () => {
  return (
    <header
      className="nav-bar"
    >
      <a href="/" className="nav-bar__home">
        <strong>Jordan Nishina</strong>
      </a>

      <nav>
        <a href="/#about" className="nav-bar__link">About</a>
        <a href="/#work" className="nav-bar__link">Work</a>
        <a href="/#contact" className="nav-bar__link">Contact</a>
      </nav>
    </header>
  );
}

export default NavBar;

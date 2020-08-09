import React, { useState } from "react";
import { useDarkMode } from "../hooks/useDarkMode";
const Navbar = () => {
  const [darkmode, setDarkMode] = useDarkMode();

  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={setDarkMode}
          className={darkmode ? "toggle toggled" : "toggle"}
        />
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import {Link} from 'react-router-dom'
import "../style/NavBar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/MustakSk">Me</Link></li>
        <li><Link to="/projects">Projects</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
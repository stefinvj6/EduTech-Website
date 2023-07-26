import React from "react";
import "./Header.css";
import logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";

const nav_titles = [
  { path: "/", display: "Home" },
  { path: "/services", display: "Services" },
  { path: "/courses", display: "Courses" },
  { path: "/aboutus", display: "About" },
];

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="nav_container">
          <div className="logo">
            <div className="logo_img">
              <img src={logo} alt="" />
            </div>
            <h2>Archer</h2>
          </div>
          <div className="navigation">
            <ul className="menu">
              {nav_titles.map((item) => (
                <li className="nav_item">
                  <Link to={item.path} >{item.display}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

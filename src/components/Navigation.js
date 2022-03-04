import React from "react";
import MyLogo from "./MyLogo";
import { NavLink, Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <Link to="/" style={{ textDecoration: "none" }}>
            <MyLogo />
          </Link>
        </li>
        <li className="navigation__item">
          <NavLink
            to="projects"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            Projects
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink
            to="about-me"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            About Me
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink
            to="contact"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

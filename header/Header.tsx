import "./header.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Header = () => {
  const [open, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!open);
  }

  return (
    <div className="header-container">
      <Link to="/" className="header-title">
        <h1>Luke Baxter</h1>
      </Link>
      <Link className="about-me" to="/About">
        <span>Interests</span>
      </Link>
      <Link to="/Contact">
        <span className="contact">Contact</span>
      </Link>
      <div className="dropdown">
        <button className="menu-button" onClick={handleClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        {open && (
          <div className="dropdown-content">
            <Link className="menu-about-me" to="/About">
              <span>Interests</span>
            </Link>
            <Link to="/Contact">
              <span className="menu-contact">Contact</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

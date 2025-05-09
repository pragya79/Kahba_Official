import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import kahbalogo from "../../assets/kahbalogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="nav">
      <div className="logo">
        <Link to="/">
          <img src={kahbalogo} alt="Kahba Logo" height="50px" width="50px" />
        </Link>
      </div>
      <div className={`nav-links ${isOpen ? "active" : ""}`}>
        <Link to="/about">About us</Link>
        <Link to="/ourwork">Work</Link>
        <Link to="/careers">Careers</Link>
        <Link to="/contact">Contact us</Link>
        <Link to="/tkc">TKC</Link>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      <style jsx>{`
        .nav {
          position: fixed;
          z-index: 10;
          display: flex;
          align-items: center;
          color: white;
          width: 100%;
          justify-content: center;
          gap: 70px;
          padding: 10px 20px;
        }

        .logo img {
          display: block;
        }

        .nav-links {
          display: flex;
          font-weight: 500;
          transition: all 0.3s ease-in-out;
          gap: 4rem;
        }

        .nav-links a {
          font-size: 1rem;
          color: white;
          text-decoration: none;
          transition: color 0.3s;
        }

        .nav-links a:hover {
          color: #fb923c; /* Orange hover color */
        }

        .hamburger {
          display: none;
          cursor: pointer;
          color: white;
        }

        /* Responsive styles */

        @media (max-width: 768px) {
        .nav{
          justify-content: space-between;
           background-color: rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(10px);
        }
          .nav-links {
            position: absolute;
            top: 70px;
            left: 0;
            width: 100%;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            background-color: rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(10px);
            display: none;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease-in-out;
          }

          .nav-links.active {
            display: flex;
            opacity: 1;
            visibility: visible;
          }

          .nav-links a {
            width: 100%;
            text-align: center;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          }

          .hamburger {
            display: block;
          }
        }
      `}</style>
    </div>
  );
};

export default Navbar;

import React from 'react';
import { Link } from "react-router-dom";
import './navbar.css';

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark text-white bg-dark ">
      <Link to="/" className="text-white navbar-brand ms-4 text-decoration-none">Pizzeria Mamma Mía!</Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ">
          {token ? (
            <>
              <li className="nav-item">
                <Link to="/profile" className="text-white ms-3 text-decoration-none">🔓 Logout</Link>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link to="/login" className="text-white ms-3 text-decoration-none">🔓 Login</Link>
              </li>
              <li className="nav-item">
                <Link to="/register" className="text-white ms-3 text-decoration-none">🔓 Register</Link>
              </li>
            </>
          )}
        </ul>
        <form className="position-absolute end-0 me-4">
            <button className="btn btn-outline-info" type="submit">
              <Link to="/cart" className="text-white ms-3 text-decoration-none nav-link btn-hover">🛒 Total: ${total.toLocaleString()}</Link>
            </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
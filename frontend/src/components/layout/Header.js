import React from "react";
import { Link } from "react-router-dom";

const Header = ({ history }) => {
  const clearStorage = () => {
    localStorage.removeItem("sanctum-token");
    localStorage.removeItem("user");

    history.push("login");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-5">
      <a className="navbar-brand" href="#">
        Complaint Tracker
      </a>
      <ul className="navbar-nav ml-auto">
        {localStorage.getItem("sanctum-token") ? (
          <>
            <li className="nav-item active">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/complaints" className="nav-link">
                Complaints
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <a href="#" onClick={clearStorage} className="nav-link active">
                Logout
              </a>
            </li>
          </>
        ) : (
          <>
            <li className="nav-item active">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/complaints" className="nav-link">
                Complaints
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link active">
                Login
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Header;

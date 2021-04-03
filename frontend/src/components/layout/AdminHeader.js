import React from "react";
import { Link } from "react-router-dom";

const AdminHeader = () => {
  return (
    <nav
      id="admin-header"
      className="navbar navbar-expand-lg navbar-light px-5"
      style={{ background: "white" }}
    >
      <ul className="navbar-nav ml-auto">
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            User Name
          </a>
          <div
            class="dropdown-menu dropdown-menu-right"
            aria-labelledby="navbarDropdown"
          >
            <a class="dropdown-item" href="#">
              Logout
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default AdminHeader;

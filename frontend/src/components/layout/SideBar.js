import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <>
      <div class="sidenav">
        <div className="sidebar-logo mb-3">
          <h3 className="navbar-brand text-white ml-2">Admin Dashboard</h3>
        </div>
        <Link to="/admin/complaints" className="nav-link">
          Complaints
        </Link>
      </div>
    </>
  );
};

export default SideBar;

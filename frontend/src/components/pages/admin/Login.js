import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="container ">
        <div className="form-card col-md-4 mx-auto py-5 mt-5 rounded bg-white">
          <div className="logo-container row">
            <h3 className="mx-auto">Admin Login</h3>
          </div>
          <div className="form-container col-lg-12 col-md-12 mx-auto my-3">
            <div
              className="alert alert-danger d-none"
              id="form-alert"
              role="alert"
            >
              Please fill in all inputs
            </div>
            <div id="user-data-form">
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="passsword">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="email"
                  name="password"
                  placeholder="Enter Password"
                />
              </div>
              <button type="submit" className="btn btn-dark col-12" id="submit">
                Submit
              </button>
            </div>
            <div className="register-link mt-4">
              <p>
                Dont't have an account?
                <span className="text-primary">
                  <Link
                    to="/admin/register"
                    className="ml-2"
                    style={{ textDecoration: "none" }}
                  >
                    Sign Up Now
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

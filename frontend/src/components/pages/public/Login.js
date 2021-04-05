import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = ({ history }) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const submitHandler = async () => {
    try {
      let response = await fetch("http://127.0.0.1:8000/api/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: form.email,
          password: form.password,
        }),
      });
      let data = await response.json();
      // console.log(data.user);
      // console.log(data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("sanctum-token", JSON.stringify(data.token));
      if (data.token) {
        history.push("/");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className="container ">
        <div className="form-card col-md-4 mx-auto py-5 mt-5 rounded bg-white">
          <div className="logo-container row">
            <h3 className="mx-auto">Login</h3>
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
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
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
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                />
              </div>
              <button
                type="submit"
                className="btn btn-dark col-12"
                id="submit"
                onClick={submitHandler}
              >
                Submit
              </button>
            </div>
            <div className="register-link mt-4">
              <p>
                Dont't have an account?
                <span className="text-primary">
                  <Link
                    to="/register"
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

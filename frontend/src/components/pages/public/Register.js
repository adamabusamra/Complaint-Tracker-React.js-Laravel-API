import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = ({ history }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const submitHandler = async () => {
    try {
      let response = await fetch("http://127.0.0.1:8000/api/register", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          password: form.password,
          password_confirmation: form.password_confirmation,
        }),
      });
      let data = await response.json();
      // console.log(data.user);
      // console.log(data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("sanctum-token", JSON.stringify(data.token));
      history.push("/");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className="container">
        <div className="form-card col-md-4 mx-auto py-5 mt-5 rounded bg-white">
          <div className="logo-container row">
            <h3 className="mx-auto">Register</h3>
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
                <label htmlFor="email">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Enter name"
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
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
              <div className="form-group">
                <label htmlFor="passsword">Confirm</label>
                <input
                  type="password"
                  className="form-control"
                  id="email"
                  name="password_confirmed"
                  placeholder="Confirm Password"
                  onChange={(e) =>
                    setForm({ ...form, password_confirmation: e.target.value })
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
                Already have an account?
                <span className="text-primary">
                  <Link
                    to="/login"
                    className="ml-2"
                    style={{ textDecoration: "none" }}
                  >
                    Login
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

export default Register;

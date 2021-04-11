import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { guest } from "../../../custom-middleware";

const Login = ({ history }) => {
  useEffect(() => {
    const isGuest = guest();
    console.log(isGuest);
    if (!isGuest) {
      history.push("/");
    }
  }, []);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const submitHandler = async () => {
    try {
      // Cause we are authenticating from a different domain than the backend we must configure "CORS" by setting the bellow config
      axios.defaults.withCredentials = true;

      /* To authenticate we should first make a request to the /sanctum/csrf-cookie endpoint to initialize CSRF protection for the application
      Laravel will set an XSRF-TOKEN cookie containing the current CSRF token.
      The token should then be passed in an X-XSRF-TOKEN header on subsequent requests, which some HTTP client libraries like Axios and the Angular HttpClient will do automatically for you */
      await axios.get("http://127.0.0.1:8000/sanctum/csrf-cookie");

      // Now we can hit the login route and axios like we said will include the CSRF token
      let response = await axios.post("http://127.0.0.1:8000/api/login", form);
      console.log(response.data);

      // Storing the response in the session so we can send token when accessing protected routes
      localStorage.setItem("user", JSON.stringify(response.data.user));
      localStorage.setItem(
        "sanctum-token",
        JSON.stringify(response.data.token)
      );

      // redirect to home page
      history.push("/");
    } catch (error) {
      if (error.response) {
        // client received an error response (5xx, 4xx)
        console.log(error.response.data.message);
      } else if (error.request) {
        // client never received a response, or request never left
        console.log(error.request);
      } else {
        // anything else
        console.log(error);
      }
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

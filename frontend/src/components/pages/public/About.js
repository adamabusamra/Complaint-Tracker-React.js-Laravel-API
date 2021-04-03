import React from "react";

const About = () => {
  return (
    <>
      <div className="form-card col-md-10 mx-auto py-5 mt-5 rounded bg-white">
        <div className="about-container">
          <h1>About This App</h1>
          <p className="my-1 mt-3">
            This is a API Thats connects React & laravel and it is a complaint
            system that contains a publpic side for the user and an admin
            dashboard
          </p>
          <p className="bg-dark p-3 mt-4 text-white">
            <strong>Version: </strong> 1.0.0
          </p>
          <p>Built by Adam Abusamra</p>
          <p>
            <i class="fab fa-github"></i> Git repository :{" "}
            <a href="http://github.com/adamabusamra" target="_blank">
              https://github.com/adamabusamra/flight_tracker_Laravel-react_API
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default About;

import React, { useEffect, useState } from "react";
import Select from "react-select";
import countries from "../../../assets/data/countries.json";
import basisOfComplaint from "../../../assets/data/basisOfComplaints.json";
import DatePicker from "react-datepicker";
import moment from "moment";
import axios from "axios";
import { auth } from "../../../custom-middleware";

// import TimePicker from "react-time-picker";
import Timekeeper from "react-timekeeper";

// My css --just edited the wrapper to be 100% width
import "../../../assets/css/react-date-picker.css";
// Their css
// import "react-datepicker/dist/react-datepicker.css";

const Home = ({ history }) => {
  useEffect(async () => {
    const authenticate = await auth();
    console.log(authenticate);
    if (!authenticate) {
      history.push("/login");
    }
  }, []);

  const [startDate, setStartDate] = useState(new Date());
  const [theDate, setTheDate] = useState(new Date());
  const [time, setTime] = useState("10:30");
  const [showTime, setShowTime] = useState(false);
  const [form, setForm] = useState({});
  const submitHandler = async () => {
    let newForm = { ...form };
    newForm.incident_datetime = `${startDate} ${time}`;
    try {
      axios.defaults.withCredentials = true;
      // Sending the token since we are accessing protected route
      axios.defaults.headers.common["Authorization"] = `Bearer ${JSON.parse(
        localStorage.getItem("sanctum-token")
      )}`;
      await axios.get("http://127.0.0.1:8000/sanctum/csrf-cookie");
      let response = await axios.post("http://127.0.0.1:8000/api/complaints", {
        data: newForm,
      });
      console.log(response.data);
      history.push("/complaints");
    } catch (error) {
      if (error.response) {
        // client received an error response (5xx, 4xx)
        console.log(error.response);
        console.log(error.response.data.message);
        if (error.response.status == 401) {
          if (localStorage.getItem("sanctum-token")) {
            localStorage.removeItem("sanctum-token");
            history.push("/login");
          } else {
            history.push("/login");
          }
        }
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
    <div className="row mt-5 bg-white p-4 rounded form-card">
      <div className="col-sm-12">
        <h5 className="mb-4">Submit New Complaint</h5>
        {/* <div className="alert alert-danger mb-0" role="alert">
          <p className="mb-0">error</p>
        </div> */}
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label>Mobile Number</label>
              <input
                type="text"
                className="form-control"
                placeholder="Mobile Number"
                name="number"
                onChange={(e) => setForm({ ...form, number: e.target.value })}
                required
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Contact Email</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                name="email"
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect1">Country</label>
              <Select
                options={countries}
                onChange={(e) => setForm({ ...form, country: e.value })}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect1">
                Complainant Status
              </label>
              <select
                className="form-control"
                id="exampleFormControlSelect1"
                name="complainant_status"
                onChange={(e) =>
                  setForm({ ...form, complainant_status: e.target.value })
                }
                required
              >
                <option hidden selected value="">
                  Select Status
                </option>
                <option>Employee</option>
                <option>Job Applicant</option>
                <option>Customer</option>
                <option>Third Party Bussiness</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect1" className="d-block">
                Date & Time of incident
              </label>
              <DatePicker
                selected={theDate}
                onChange={(date) => {
                  setTheDate(date);
                  setStartDate(date.toISOString().split("T")[0]);
                }}
                className="form-control d-block"
                dateFormat="Pp"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect1">
                Basis of Complaint
              </label>
              <Select
                isMulti
                name="complaint_basis"
                options={basisOfComplaint}
                className="basic-multi-select"
                classNamePrefix="select"
                placeholder="Multiple Select"
                onChange={(value) => {
                  setForm({ ...form, complaint_basis: value });
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect1" className="d-block">
                Time of incident
              </label>
              <input
                type="text"
                className="form-control d-inline"
                placeholder="Select Incident time"
                onFocus={() => setShowTime(true)}
                onBlur={() => setShowTime(false)}
                value={time}
              />

              {showTime ? (
                <div className="time-keeper">
                  <Timekeeper
                    time={time}
                    onChange={(time) => {
                      setTime(time.formatted24);
                      // setForm({ ...form, time: time.formatted24 });
                    }}
                    onDoneClick={() => setShowTime(false)}
                    switchToMinuteOnHourSelect
                  />
                </div>
              ) : null}
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <div className="form-group">
                <label>Subject</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  name="subject"
                  onChange={(e) => {
                    setForm({ ...form, subject: e.target.value });
                  }}
                  required
                />
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <div className="form-group">
                <label>Summary of complaint/ issue</label>
                <textarea
                  type="text-area"
                  className="form-control"
                  placeholder="Summary of complaint/issue"
                  name="body"
                  rows="5"
                  onChange={(e) => {
                    setForm({ ...form, body: e.target.value });
                  }}
                  required
                ></textarea>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <div className="form-group">
                <label>Prefered outcome/ Suggested solution</label>
                <textarea
                  type="text-area"
                  className="form-control"
                  placeholder="Prefered outcome/ Suggested solution"
                  name="solution"
                  rows="4"
                  onChange={(e) => {
                    setForm({ ...form, solution: e.target.value });
                  }}
                  required
                ></textarea>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={submitHandler}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

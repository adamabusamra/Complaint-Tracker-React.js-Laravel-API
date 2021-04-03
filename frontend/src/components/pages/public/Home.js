import React, { useState } from "react";
import Select from "react-select";
import countries from "../../../assets/data/countries.json";
import basisOfComplaint from "../../../assets/data/basisOfComplaints.json";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const Home = () => {
  const [startDate, setStartDate] = useState(new Date());
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
                required
              />
            </div>
          </div>
          {/* <div className="col-md-12">
            <div className="form-group">
              <div className="form-group">
                <label>Subject</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  name="Subject"
                  required
                />
              </div>
            </div>
          </div> */}
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
                required
              />
            </div>
            <div className="form-group">
              <label for="exampleFormControlSelect1">Country</label>
              <Select options={countries} />
              {/* <select
                className="form-control"
                id="exampleFormControlSelect1"
                name="country"
                required
              >
                <option hidden selected value="">
                  Select Country
                </option>
                <option>Irbid</option>
                <option>Ajloun</option>
                <option>Jarash</option>
                <option>Mafraq</option>
                <option>Balqa</option>
                <option>Amman</option>
                <option>Zarqa</option>
                <option>Madaba</option>
                <option>Karak</option>
                <option>Tafila</option>
                <option>Amman</option>
                <option>Aqaba</option>
              </select> */}
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
                name="education_level"
                required
              >
                <option hidden selected value>
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
                Date of incident
              </label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="form-control d-block"
              />
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="form-control d-block ml-4"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect1">
                Basis of Complaint
              </label>
              <Select
                isMulti
                name="colors"
                options={basisOfComplaint}
                className="basic-multi-select"
                classNamePrefix="select"
                placeholder="Multiple Select"
              />
            </div>
            <div className="mt-2 d-block">
              <label className="mr-5">Gender</label>
            </div>
            <div className="d-inline mr-5">
              <div className="custom-control custom-radio d-inline">
                <input
                  type="radio"
                  id="customRadio1"
                  name="gender"
                  className="custom-control-input"
                  defaultValue="male"
                  required
                />
                <label className="custom-control-label" htmlFor="customRadio1">
                  Male
                </label>
              </div>
              <div className="custom-control custom-radio d-inline ml-1">
                <input
                  type="radio"
                  id="customRadio2"
                  name="gender"
                  className="custom-control-input"
                  defaultValue="female"
                  required
                />
                <label className="custom-control-label" htmlFor="customRadio2">
                  Female
                </label>
              </div>
            </div>
            <div className="custom-control custom-checkbox d-inline ml-5">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
                name="it_background"
                required
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Has IT background
              </label>
            </div>
          </div>
          <div className="col-md-6"></div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;

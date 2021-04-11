import React, { useEffect, useState } from "react";
import moment from "moment";
import axios from "axios";
import { auth } from "../../../custom-middleware";

const Complaints = ({ history }) => {
  const [complaints, setComplaints] = useState([]);
  useEffect(async () => {
    const authenticate = await auth();
    console.log(authenticate);
    if (!authenticate) {
      history.push("/login");
    }
    try {
      axios.defaults.withCredentials = true;
      // Sending the token since we are accessing protected route
      axios.defaults.headers.common["Authorization"] = `Bearer ${JSON.parse(
        localStorage.getItem("sanctum-token")
      )}`;
      await axios.get("http://127.0.0.1:8000/sanctum/csrf-cookie");
      let response = await axios.get("http://127.0.0.1:8000/api/complaints");
      console.log(response);
      setComplaints([...response.data]);
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
  }, []);
  return (
    <>
      <div className="mt-5 bg-white p-4 rounded form-card">
        <h3 className="mt-1">Complaints</h3>
        <div className="mt-5">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">reference_id</th>
                <th scope="col">Subject</th>
                <th scope="col">Problem</th>
                <th scope="col">Suggestion</th>
                <th scope="col">Incident date</th>
                <th scope="col">Status</th>
                <th scope="col">Issue_date</th>
                {/* <th scope="col">Edit</th>
                <th scope="col">Delete</th> */}
              </tr>
            </thead>
            <tbody>
              {complaints.map((item) => {
                return (
                  <tr>
                    <th scope="row">{item.id}</th>
                    <td>{item.subject}</td>
                    <td>{item.body}</td>
                    <td>{item.solution}</td>
                    <td>{item.incident_datetime}</td>
                    {item.complaint_status == "pending" ? (
                      <td>
                        <span class="badge badge-warning">Pending</span>
                      </td>
                    ) : item.complaint_status == "approved" ? (
                      <td>
                        <span class="badge badge-success">Approved</span>
                      </td>
                    ) : item.complaint_status == "dismissed" ? (
                      <td>
                        <span class="badge badge-danger">Dismissed</span>
                      </td>
                    ) : null}
                    <td>{moment(item.created_at).format("LLL")}</td>
                    {/* <td>
                      <a href="" className="btn btn-outline-success">
                        Edit
                      </a>
                    </td>
                    <td>
                      <a href="" className="btn btn-outline-danger">
                        Delete
                      </a>
                    </td> */}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Complaints;

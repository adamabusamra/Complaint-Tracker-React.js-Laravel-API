import React from "react";

const Complaints = () => {
  return (
    <>
      <h3 className="mt-5">My Complaints</h3>
      <div className="mt-5">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Subject</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
              <th scope="col">Handle</th>
              <th scope="col">Handle</th>
              <th scope="col">Handle</th>
              <th scope="col">Approve</th>
              <th scope="col">Dismiss</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>
                <a href="" className="nav-link">
                  Complaint
                </a>
              </td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>
                <a href="" className="btn btn-outline-success">
                  Approve
                </a>
              </td>
              <td>
                <a href="" className="btn btn-outline-danger">
                  Dismiss
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Complaints;

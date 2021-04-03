import React from "react";

const Complaints = () => {
  return (
    <>
      <div className="mt-5 bg-white p-4 rounded form-card">
        <h3 className="mt-1">Complaints</h3>
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
      </div>
    </>
  );
};

export default Complaints;

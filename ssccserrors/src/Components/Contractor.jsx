import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Contractor() {
  const [contractor, setContractor] = useState([]);
  let i = 1;
  useEffect(() => {
    getContractor();
  }, []);
  const getContractor = async () => {
    const res = await axios.get("http://localhost:1122/track/contractor");
    setContractor(res.data);
    console.log(res.data);
  };
  const deleteContractor = async (id) => {
    let ans = window.confirm("are you sure?");
    if (ans) {
      const res = await axios.delete(
        "http://localhost:1122/track/contractor/" + id
      );
      console.log(res.data);
      alert(res.data);
      getContractor();
    }
  };
  return (
    <div>
      <main id="main" class="main">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Contractor</h5>

            <button class="button-39" role="button">
              <Link to={`/Add_contractor/`}>Add Contractor</Link>
            </button>

            <table class="table table-borderless">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Contractor name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Contact</th>
                  <th scope="col">City</th>
                </tr>
              </thead>
              <tbody>
                {contractor.map((contractor) => (
                  <tr>
                    <th scope="row">{i++}</th>
                    <td>{contractor.contractor_name}</td>
                    <td>{contractor.contractor_email}</td>
                    <td>{contractor.contact}</td>
                    <td>{contractor.city}</td>
                    <td>
                      <button class="button-39" role="button">
                        <Link to={`/Add_task/`}>Give Task</Link>
                      </button>
                      &nbsp; &nbsp; &nbsp;
                      <button
                        onClick={() =>
                          deleteContractor(contractor.contractor_id)
                        }
                        class="button-40"
                        role="button"
                      >
                        DELETE
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Subadmin() {
  const [subadmin, setSubadmins] = useState([]);
  let i = 1;
  useEffect(() => {
    getSubadmins();
  }, []);
  const getSubadmins = async () => {
    const res = await axios.get("http://localhost:1122/track/subadmin");
    setSubadmins(res.data);
    console.log(res.data);
  };
  const deleteSubadmins = async (id) => {
    let ans = window.confirm("are you sure?");
    if (ans) {
      const res = await axios.delete(
        "http://localhost:1122/track/subadmin/" + id
      );
      console.log(res.data);
      alert(res.data);
      getSubadmins();
    }
  };
  return (
    <div>
      <main id="main" class="main">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">subadmin</h5>

            <button class="button-39" role="button">
              <Link to={`/Add_subadmin/`}>Add subadmin</Link>
            </button>

            <table class="table table-borderless">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Sub-Admin name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Contact</th>
                  <th scope="col">City</th>
                </tr>
              </thead>
              <tbody>
                {subadmin.map((subadmin) => (
                  <tr>
                    <th scope="row">{i++}</th>
                    <td>{subadmin.sub_admin_name}</td>
                    <td>{subadmin.sub_admin_email}</td>
                    <td>{subadmin.contact}</td>
                    <td>{subadmin.city}</td>
                    <td>
                      <button class="button-39" role="button">
                        <Link to={`/Add_subadmin/` + subadmin.sub_admin_id}>
                          Edit
                        </Link>
                      </button>
                      &nbsp; &nbsp; &nbsp;
                      <button
                        onClick={() => deleteSubadmins(subadmin.sub_admin_id)}
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

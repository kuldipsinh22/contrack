import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

export default function Add_project() {
  const [projects, setProject] = useState([]);
  const [project_name, setproject_name] = useState("");
  const [project_time, setproject_time] = useState("");
  const [sub_admin_id, setsub_admin_id] = useState("");
  const [location, setlocation] = useState("");
  const [city, setcity] = useState("");
  const [state, setstate] = useState("");
  const [status, setStatus] = useState("");
  const location1 = useLocation();
  const navigate = useNavigate();
  const project_id = location1.pathname.split("/")[2]
    ? location1.pathname.split("/")[2]
    : "";
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    if (project_id) {
      getprojects();
    }
  }, []);

  const getprojects = async () => {
    const res = await axios.get(
      "http://localhost:1122/track/projects/" + project_id
    );
    setproject_name(res.data.project_name);
    setproject_time(res.data.project_time);
    setsub_admin_id(res.data.sub_admin_id);
    setlocation(res.data.location);
    setcity(res.data.city);
    setstate(res.data.state);
    setStatus(res.data.status);
    // setImg(res.data.);
  };

  const validate = () => {
    const error = {};

    if (!project_name) {
      error.project_name = "Please Enter Project project_name";
    }
    if (!project_time) {
      error.project_time = "Please Select project_time ";
    }
    if (!location) {
      error.location = "Please Write location";
    }
    if (!city) {
      error.city = "Please write City";
    }
    if (!state) {
      error.city = "Please write State";
    }
    return error;
  };

  const btnSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validate());
    if (project_name && project_time && location && city && state) {
      const data = {
        project_name,
        project_time,
        sub_admin_id,
        location,
        city,
        state,
        status,
      };
      let res = "";
      if (project_id) {
        res = await axios.put(
          "http://localhost:1122/track/projects/" + project_id,
          data
        );
      } else {
        res = await axios.post("http://localhost:1122/track/projects", data);
      }

      alert(res.data);
    }
  };
  return (
    <main id="main" class="main">
      <div class="card">
        <div class="card-body">
          <h1 class="card-project_name">Project</h1>
          <form class="row g-3">
            <div class="col-md-6">
              <div class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  id="floatingName"
                  placeholder="Activity name"
                  defaultValue={project_name}
                  onChange={(e) => setproject_name(e.target.value)}
                />{" "}
                <p style={{ color: "red" }}>{formErrors.project_name}</p>
                <label for="floatingName">project_name</label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  placeholder="project_time"
                  defaultValue={project_time}
                  onChange={(e) => setproject_time(e.target.value)}
                />{" "}
                <p style={{ color: "red" }}>{formErrors.project_time}</p>
                <label for="floatingEmail">project_time</label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Sub admin id"
                  defaultValue={sub_admin_id}
                  onChange={(e) => setsub_admin_id(e.target.value)}
                />{" "}
                <p style={{ color: "red" }}>{formErrors.project_time}</p>
                <label for="floatingEmail">Sub admin id</label>
              </div>
            </div>
            <div class="col-12">
              <div class="form-floating">
                <textarea
                  class="form-control"
                  placeholder="Address"
                  defaultValue={location}
                  onChange={(e) => setlocation(e.target.value)}
                  id="floatingTextarea"
                  style={{ height: "100px" }}
                ></textarea>{" "}
                <p style={{ color: "red" }}>{formErrors.location}</p>
                <label for="floatingTextarea">location</label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="col-md-12">
                <div class="form-floating">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingcity"
                    placeholder="city"
                    defaultValue={city}
                    onChange={(e) => setcity(e.target.value)}
                  />{" "}
                  <p style={{ color: "red" }}>{formErrors.city}</p>
                  <label for="floatingcity">city</label>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="col-md-12">
                <div class="form-floating">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingcity"
                    placeholder="city"
                    defaultValue={state}
                    onChange={(e) => setstate(e.target.value)}
                  />{" "}
                  <p style={{ color: "red" }}>{formErrors.state}</p>
                  <label for="floatingcity">State</label>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-floating mb-3">
                <select
                  class="form-select"
                  id="floatingSelect"
                  aria-label="State"
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option selected>Status</option>
                  <option value="0">In-Active</option>
                  <option value="1">Active</option>
                </select>
                <label for="floatingSelect">status</label>
              </div>
            </div>
            {/* <div class="col-md-2">
              <div class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  id="floatingstatus"
                  placeholder="status"
                  defaultValue={status}
                  onChange={(e) => setStatus(e.target.value)}
                />
                <label for="floatingstatus">status</label>
              </div>
            </div> */}
            <div class="text-center">
              <button type="submit" class="btn btn-primary" onClick={btnSubmit}>
                Submit
              </button>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <button type="reset" class="btn btn-secondary">
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

export default function Add_task() {
  const [task1, setTask] = useState([]);
  //   const [sub_admin_id, setsub_admin_id] = useState("");
  const [contractor_id, setcontractor_id] = useState("");
  const [task, settask] = useState("");
  const [duration, setduration] = useState("");
  const [sub_admin_id, setId] = useState(sessionStorage.getItem("user"));

  const location1 = useLocation();
  const navigate = useNavigate();
  const id = location1.pathname.split("/")[2]
    ? location1.pathname.split("/")[2]
    : "";
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    if (id) {
      gettask();
    }
  }, []);

  const gettask = async () => {
    const res = await axios.get("http://localhost:1122/track/task/" + id);
    // setsub_admin_id(res.data.sub_admin_id);
    setcontractor_id(res.data.contractor_id);
    settask(res.data.task);
    setduration(res.data.duration);
  };

  const btnSubmit = async (e) => {
    e.preventDefault();
    // setFormErrors(validate());
    // if (project_name && project_time && location && city && state) {
    const data = {
      sub_admin_id: sub_admin_id,
      contractor_id,
      task,
      duration,
    };
    let res = "";
    if (id) {
      res = await axios.put("http://localhost:1122/track/task/" + id, data);
    } else {
      res = await axios.post("http://localhost:1122/track/task", data);
    }

    alert(res.data);
    // }
  };
  return (
    <div>
      <main id="main" class="main">
        <div class="card">
          <div class="card-body">
            <h1 class="card-project_name">Give task</h1>
            <form class="row g-3">
              <div class="col-md-6">
                <div class="form-floating">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingName"
                    placeholder="Contractor unique id"
                    defaultValue={contractor_id}
                    onChange={(e) => setcontractor_id(e.target.value)}
                  />{" "}
                  <p style={{ color: "red" }}>{formErrors.project_name}</p>
                  <label for="floatingName">Contractor unique id</label>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-floating">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="task"
                    defaultValue={task}
                    onChange={(e) => settask(e.target.value)}
                  />{" "}
                  {/* <p style={{ color: "red" }}>{formErrors.project_time}</p> */}
                  <label for="floatingEmail">Task</label>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-floating">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Duration"
                    defaultValue={duration}
                    onChange={(e) => setduration(e.target.value)}
                  />{" "}
                  {/* <p style={{ color: "red" }}>{formErrors.project_time}</p> */}
                  <label for="floatingEmail">Duration</label>
                </div>
              </div>

              <div class="text-center">
                <button
                  type="submit"
                  class="btn btn-primary"
                  onClick={btnSubmit}
                >
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
    </div>
  );
}

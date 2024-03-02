import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Task() {
  const [role_id, setRole] = useState(sessionStorage.getItem("role"));
  const [task, settasks] = useState([]);
  let i = 1;
  useEffect(() => {
    gettasks();
  }, []);
  const gettasks = async () => {
    const res = await axios.get("http://localhost:1122/track/taskjoin");
    settasks(res.data);
    console.log(res.data);
  };
  const deletetasks = async (id) => {
    let ans = window.confirm("are you sure?");
    if (ans) {
      const res = await axios.delete("http://localhost:1122/track/task/" + id);
      console.log(res.data);
      alert(res.data);
      gettasks();
    }
  };
  return (
    <div>
      <main id="main" class="main">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">task</h5>
            {role_id == 1 || role_id == 2 ? (
              <button class="button-39" role="button">
                <Link to={`/Add_task/`}>Create Task</Link>
              </button>
            ) : (
              <></>
            )}

            <table class="table table-borderless">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Giver name</th>
                  <th scope="col">Contractor name</th>
                  <th scope="col">Task</th>
                  <th scope="col">Duration</th>
                </tr>
              </thead>
              <tbody>
                {task.map((task) => (
                  <tr>
                    <th scope="row">{i++}</th>
                    <td>{task.sub_admin_name}</td>
                    <td>{task.contractor_name}</td>
                    <td>{task.task}</td>
                    <td>{task.duration}</td>
                    <td>
                      {role_id == 1 || role_id == 2 ? (
                        <>
                          <button class="button-39" role="button">
                            <Link to={`/Add_task/` + task.task_id}>Edit</Link>
                          </button>
                          &nbsp; &nbsp; &nbsp;
                          <button
                            onClick={() => deletetasks(task.task_id)}
                            class="button-40"
                            role="button"
                          >
                            DELETE
                          </button>
                        </>
                      ) : (
                        <></>
                      )}
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

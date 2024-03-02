import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function CompletedTask() {
  const [task, setcompletedtask] = useState([]);
  let i = 1;
  useEffect(() => {
    getcompletedtask();
  }, []);
  const getcompletedtask = async () => {
    const res = await axios.get("http://localhost:1122/track/done");
    setcompletedtask(res.data);
    console.log(res.data);
  };
  const deletecompletedtask = async (id) => {
    let ans = window.confirm("are you sure?");
    if (ans) {
      const res = await axios.delete("http://localhost:1122/track/done/" + id);
      console.log(res.data);
      alert(res.data);
      getcompletedtask();
    }
  };
  return (
    <div>
      <main id="main" class="main">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">task</h5>

            <button class="button-39" role="button">
              <Link to={`/Add_taskdone/`}>Create Task</Link>
            </button>

            <table class="table table-borderless">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Image1</th>
                  <th scope="col">Image2</th>
                  <th scope="col">Image3</th>
                  {/* <th scope="col">Duration</th> */}
                </tr>
              </thead>
              <tbody>
                {task.map((task) => (
                  <tr>
                    <th scope="row">{i++}</th>
                    <td>
                      <img
                        src={`http://localhost:1122/uploads/${task.img1}`}
                        height={"200px"}
                        width={"200px"}
                      ></img>
                    </td>
                    <td>
                      <img
                        src={`http://localhost:1122/uploads/${task.img2}`}
                        height={"200px"}
                        width={"200px"}
                      ></img>
                    </td>
                    <td>
                      <img
                        src={`http://localhost:1122/uploads/${task.img3}`}
                        height={"200px"}
                        width={"200px"}
                      ></img>
                    </td>
                    {/* <td>{task.contractor_name}</td>
                    <td>{task.task}</td>
                    <td>{task.duration}</td> */}
                    <td>
                      <button class="button-39" role="button">
                        <Link to={`/Add_task/` + task.task_id}>Edit</Link>
                      </button>
                      &nbsp; &nbsp; &nbsp;
                      <button
                        onClick={() => deletecompletedtask(task.task_id)}
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

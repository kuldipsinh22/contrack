import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Project() {
  const [project, setProject] = useState([]);
  let i = 1;
  useEffect(() => {
    getProjects();
  }, []);
  const getProjects = async () => {
    const res = await axios.get("/projects");
    setProject(res.data);
    console.log(res.data);
  };
  const deleteProject = async (project_id) => {
    let ans = window.confirm("are you sure?");
    if (ans) {
      const res = await axios.delete("/projects/" + project_id);
      console.log(res.data);
      alert(res.data);
      getProjects();
    }
  };

  return (
    <div>
      <main id="main" class="main">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">project</h5>

            <button class="button-39" role="button">
              <Link to={`/Add_project/`}>Add project</Link>
            </button>

            <table class="table table-borderless">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Project name</th>
                  <th scope="col">Publish Date</th>
                  <th scope="col">City</th>
                  <th scope="col">Duration</th>
                </tr>
              </thead>
              <tbody>
                {project.map((project) => (
                  <tr>
                    <th scope="row">{i++}</th>
                    <td>{project.title}</td>
                    <td>{project.entry_date}</td>
                    <td>{project.city}</td>
                    <td>{project.project_time}</td>
                    <td>
                      <button class="button-39" role="button">
                        <Link to={`/Add_project/` + project.project_id}>
                          Edit
                        </Link>
                      </button>
                      &nbsp; &nbsp; &nbsp;
                      <button
                        onClick={() => deleteProject(project.project_id)}
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

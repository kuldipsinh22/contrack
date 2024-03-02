import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

export default function Add_taskdone() {
  const [task_id, settask_id] = useState("");
  const [img1, setimg1] = useState("");
  const [img2, setimg2] = useState("");
  const [img3, setimg3] = useState("");
  const [img4, setimg4] = useState("");
  const [img5, setimg5] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  const id = location.pathname.split("/")[2]
    ? location.pathname.split("/")[2]
    : "";
  useEffect(() => {
    console.log(id);
    if (id) {
      getTask();
    }
  }, []);

  const getTask = async () => {
    const url = "http://localhost:1122/track/taskdone/" + id;
    console.log(url);
    const res = await axios.get(url);
    console.log(res.data);
    settask_id(res.data.task_id);
    setimg1(res.data.img1);
    setimg2(res.data.img2);
    setimg3(res.data.img3);
    setimg4(res.data.img4);
    setimg5(res.data.img5);
  };

  const submitbtn = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("task_id", task_id);
    formData.append("img1", img1);
    formData.append("img2", img2);
    formData.append("img3", img3);
    formData.append("img4", img4);
    formData.append("img5", img5);
    let res = "";
    console.log(formData);

    if (id) {
      res = await axios.put(
        "http://localhost:1122/track/taskdone/" + id,
        formData
      );
    } else {
      res = await axios.post("http://localhost:1122/track/taskdone", formData);
    }
    console.log(res.data);
    alert(res.data);
    navigate("/product");
  };
  return (
    <main id="main" class="main">
      <div class="card">
        <div class="card-body">
          <form class="row g-3">
            <div class="col-md-6">
              <div class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  defaultValue={task_id}
                  onChange={(e) => settask_id(e.target.value)}
                />
                <label for="floatingName">Task ID</label>
              </div>
            </div>

            <div class="col-md-6">
              <div class="form-floating">
                <input
                  type="file"
                  class="form-control"
                  placeholder="Image"
                  onChange={(e) => setimg1(e.target.files[0])}
                />
                <label for="floatingZip">Image 1</label>
              </div>
            </div>

            <div class="col-md-6">
              <div class="form-floating">
                <input
                  type="file"
                  class="form-control"
                  placeholder="Image"
                  onChange={(e) => setimg2(e.target.files[0])}
                />
                <label for="floatingZip">Image 2</label>
              </div>
            </div>

            <div class="col-md-6">
              <div class="form-floating">
                <input
                  type="file"
                  class="form-control"
                  placeholder="Image"
                  onChange={(e) => setimg3(e.target.files[0])}
                />
                <label for="floatingZip">Image 3</label>
              </div>
            </div>

            <div class="col-md-6">
              <div class="form-floating">
                <input
                  type="file"
                  class="form-control"
                  placeholder="Image"
                  onChange={(e) => setimg4(e.target.files[0])}
                />
                <label for="floatingZip">Image 4</label>
              </div>
            </div>

            <div class="col-md-6">
              <div class="form-floating">
                <input
                  type="file"
                  class="form-control"
                  placeholder="Image"
                  onChange={(e) => setimg5(e.target.files[0])}
                />
                <label for="floatingZip">Image 5</label>
              </div>
            </div>

            <div class="text-center">
              <button type="submit" class="btn btn-primary" onClick={submitbtn}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

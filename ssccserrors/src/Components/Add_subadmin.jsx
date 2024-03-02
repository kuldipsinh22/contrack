import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

export default function Add_subadmin() {
  const [subadmin, setsubadmin] = useState([]);
  const [sub_admin_name, setsub_admin_name] = useState("");
  const [sub_admin_email, setsub_admin_email] = useState("");
  const [contact, setcontact] = useState("");
  const [password, setpassword] = useState("");
  const [city, setcity] = useState("");
  const [state, setstate] = useState("");
  const [img, setimg] = useState("");
  const location1 = useLocation();
  const navigate = useNavigate();
  const project_id = location1.pathname.split("/")[2]
    ? location1.pathname.split("/")[2]
    : "";
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    if (project_id) {
      getsubadmin();
    }
  }, []);

  const getsubadmin = async () => {
    const res = await axios.get(
      "http://localhost:1122/track/subadmin/" + project_id
    );
    setsub_admin_name(res.data.sub_admin_name);
    setsub_admin_email(res.data.sub_admin_email);
    setcontact(res.data.contact);
    setpassword(res.data.password);
    setcity(res.data.city);
    setstate(res.data.state);
    setimg(res.data.img);
    // setImg(res.data.);
  };

  const validate = () => {
    const error = {};

    if (!sub_admin_name) {
      error.sub_admin_name = "Please Enter Project project_name";
    }
    if (!sub_admin_email) {
      error.sub_admin_email = "Please Select project_time ";
    }
    if (!contact) {
      error.contact = "Please Write location";
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
    if (sub_admin_name && sub_admin_email && contact && city && state) {
      const data = {
        sub_admin_name,
        sub_admin_email,
        contact,
        password,
        city,
        state,
        img,
        project_id,
        // status,
      };
      let res = "";
      if (project_id) {
        res = await axios.put(
          "http://localhost:1122/track/subadmin/" + project_id,
          data
        );
      } else {
        res = await axios.post("http://localhost:1122/track/subadmin", data);
      }
      navigate("/Project");
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
                  defaultValue={sub_admin_name}
                  onChange={(e) => setsub_admin_name(e.target.value)}
                />{" "}
                <p style={{ color: "red" }}>{formErrors.project_name}</p>
                <label for="floatingName">Sub Admin name</label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  placeholder="sub admin email"
                  defaultValue={sub_admin_email}
                  onChange={(e) => setsub_admin_email(e.target.value)}
                />{" "}
                <p style={{ color: "red" }}>{formErrors.project_time}</p>
                <label for="floatingEmail">Sub admin email</label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Sub admin id"
                  defaultValue={contact}
                  onChange={(e) => setcontact(e.target.value)}
                />{" "}
                <p style={{ color: "red" }}>{formErrors.project_time}</p>
                <label for="floatingEmail">Contact</label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="col-md-12">
                <div class="form-floating">
                  <input
                    type="password"
                    class="form-control"
                    id="floatingcity"
                    placeholder="city"
                    defaultValue={password}
                    onChange={(e) => setpassword(e.target.value)}
                  />{" "}
                  <p style={{ color: "red" }}>{formErrors.city}</p>
                  <label for="floatingcity">password</label>
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

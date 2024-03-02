import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

export default function Add_contractor() {
  const [contractor_name, setContractorName] = useState([]);
  const [contractor_email, setContractorEmail] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [project_id, setProjectId] = useState("");
  const [work, setWork] = useState("");
  const [duration, setDuration] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [entry_date, setEntryDate] = useState("");
  const [status, setStatus] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const contractor_id = location.pathname.split("/")[2]
    ? location.pathname.split("/")[2]
    : "";
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    if (contractor_id) {
      getprojects();
    }
  }, []);

  const getprojects = async () => {
    const res = await axios.get(
      "http://localhost:1122/track/contractor" + contractor_id
    );
    setContractorName(res.data.contractor_name);
    setContractorEmail(res.data.contractor_email);
    setContact(res.data.contact);
    setPassword(res.data.password);
    setProjectId(res.data.contractor_id);
    setWork(res.data.work);
    setDuration(res.data.duration);
    setCity(res.data.city);
    setState(res.data.state);
    setEntryDate(res.data.entry_date);
    setStatus(res.data.status);
    // setImg(res.data.);
  };

  const validate = () => {
    const error = {};

    if (!contractor_name) {
      error.contractor_name = "Please Enter Project name";
    }
    if (!contractor_email) {
      error.contractor_email = "Please Select email ";
    }
    if (!contact) {
      error.contact = "Please Write contact";
    }
    // if (!student_id) {
    //   error.student_id = "Please write your name";
    // }
    return error;
  };

  const btnSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validate());
    if (
      contractor_name &&
      contractor_email &&
      contact &&
      password &&
      contractor_id &&
      work &&
      duration &&
      city &&
      state &&
      entry_date &&
      status
    ) {
      const data = {
        contractor_name,
        contractor_email,
        contact,
        password,
        contractor_id,
        work,
        duration,
        city,
        state,
        entry_date,
        status,
      };
      let res = "";
      if (contractor_id) {
        res = await axios.put(
          "http://localhost:1122/track/contractor/" + contractor_id,
          data
        );
      } else {
        res = await axios.post("http://localhost:1122/track/contractor", data);
      }
      navigate("/Contactform");
      alert(res.data);
    }
  };
  return (
    <main id="main" class="main">
      <div class="card">
        <div class="card-body">
          <h1 class="card-name">Contractor</h1>
          <form class="row g-3">
            <div class="col-md-6">
              <div class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  id="floatingName"
                  placeholder="Activity name"
                  defaultValue={contractor_name}
                  onChange={(e) => setContractorName(e.target.value)}
                />{" "}
                <p style={{ color: "red" }}>{formErrors.contractor_name}</p>
                <label for="floatingName">Contractor name</label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  id="floatingEmail"
                  placeholder="email"
                  defaultValue={contractor_email}
                  onChange={(e) => setContractorEmail(e.target.value)}
                />{" "}
                <p style={{ color: "red" }}>{formErrors.contractor_email}</p>
                <label for="floatingEmail">Contractor Email</label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  id="floatingEmail"
                  placeholder="text"
                  defaultValue={contact}
                  onChange={(e) => setContact(e.target.value)}
                />{" "}
                <p style={{ color: "red" }}>{formErrors.contact}</p>
                <label for="floatingEmail">contact</label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  id="floatingEmail"
                  placeholder="password"
                  defaultValue={password}
                  onChange={(e) => setPassword(e.target.value)}
                />{" "}
                <p style={{ color: "red" }}>{formErrors.password}</p>
                <label for="floatingEmail">password</label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  id="floatingEmail"
                  placeholder="contractor_id"
                  defaultValue={contractor_id}
                  onChange={(e) => setProjectId(e.target.value)}
                />{" "}
                <p style={{ color: "red" }}>{formErrors.contractor_id}</p>
                <label for="floatingEmail">contractor_id</label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  id="floatingEmail"
                  placeholder="work"
                  defaultValue={work}
                  onChange={(e) => setWork(e.target.value)}
                />{" "}
                <p style={{ color: "red" }}>{formErrors.work}</p>
                <label for="floatingEmail">work</label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  id="floatingEmail"
                  placeholder="duration"
                  defaultValue={duration}
                  onChange={(e) => setDuration(e.target.value)}
                />{" "}
                <p style={{ color: "red" }}>{formErrors.duration}</p>
                <label for="floatingEmail">duration</label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  id="floatingEmail"
                  placeholder="city"
                  defaultValue={city}
                  onChange={(e) => setCity(e.target.value)}
                />{" "}
                <p style={{ color: "red" }}>{formErrors.city}</p>
                <label for="floatingEmail">city</label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  id="floatingEmail"
                  placeholder="state"
                  defaultValue={state}
                  onChange={(e) => setState(e.target.value)}
                />{" "}
                <p style={{ color: "red" }}>{formErrors.state}</p>
                <label for="floatingEmail">state</label>
              </div>
            </div>

            {/* <div class="col-md-4">
                <div class="form-floating mb-3">
                  <select
                    class="form-select"
                    id="floatingSelect"
                    aria-label="State"
                  >
                    <option selected>India</option>
                    <option value="1">Oregon</option>
                    <option value="2">DC</option>
                  </select>
                  <label for="floatingSelect">State</label>
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

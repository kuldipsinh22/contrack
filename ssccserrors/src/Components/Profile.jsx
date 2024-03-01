import React, { useState } from "react";
import axios from "axios";

export default function Profile() {
  const [admin_name, setadmin_name] = useState("");
  const [admin_email, setadmin_email] = useState("");
  const [contact, setcontact] = useState("");
  const [password, setpassword] = useState("");
  const [img, setimg] = useState("");
  const [sub_admin_name, setsub_admin_name] = useState("");
  const [sub_admin_email, setsub_admin_email] = useState("");
  const [state, setstate] = useState("");
  const [contractor_name, setcontractor_name] = useState("");
  const [contractor_email, setcontractor_email] = useState("");
  const [project_id, setproject_id] = useState("");
  const [work, setwork] = useState("");
  const [duration, setduration] = useState("");
  const [city, setcity] = useState("");
  const [status, setstatus] = useState("");

  const [id, setId] = useState(sessionStorage.getItem("user"));
  const [role_id, setRole_Id] = useState(sessionStorage.getItem("role"));
  const getdata = async () => {
    if (role_id == 1) {
      try {
        const res = await axios.get("/admin/" + id);
        console.log(res.data);
        setadmin_name(res.data.admin_name);
        setcontact(res.data.contact);
        setadmin_email(res.data.admin_email);
        setpassword(res.data.password);
        setimg(res.data.img);
      } catch (error) {}
    } else if (role_id == 2) {
      try {
        const res = await axios.get("/sub_admin/" + id);
        console.log(res.data);
        setsub_admin_name(res.data.sub_admin_name);
        setsub_admin_email(res.data.sub_admin_email);
        setcontact(res.data.contact);
        setpassword(res.data.password);
        setcity(res.data.city);
        setstate(res.data.state);
        setimg(res.data.img);
      } catch (error) {}
    } else if (role_id == 3) {
      try {
        const res = await axios.get("/contractor/" + id);
        console.log(res.data);
        setcontractor_name(res.data.contractor_name);
        setcontractor_email(res.data.contractor_email);
        setcontact(res.data.contact);
        setpassword(res.data.password);
        setproject_id(res.data.project_id);
        setwork(res.data.work);
        setduration(res.data.duration);
        setcity(res.data.city);
        setstate(res.data.state);
        setimg(res.data.img);
      } catch (error) {}
    }
  };

  const submitbtn = async (e) => {
    e.preventDefault();
    if (role_id == 1) {
      const formData = new FormData();
      try {
        formData.append("admin_name", admin_name);
        formData.append("contact", contact);
        formData.append("admin_email", admin_email);
        formData.append("password", password);
        formData.append("img", "img");
        let res = "";
        if (id) {
          res = await axios.put("/admin/" + id, formData);
        }
        alert(res.data);
        console.log(res.data);
        window.location.reload();
      } catch (error) {}
    }
    if (role_id == 2) {
      const formData = new FormData();
      try {
        formData.append("sub_admin_name", sub_admin_name);
        formData.append("sub_admin_email", sub_admin_email);
        formData.append("contact", contact);
        formData.append("password", password);
        formData.append("city", city);
        formData.append("state", state);
        formData.append("img", "img");
        let res = "";
        if (id) {
          res = await axios.put("/sub_admin/" + id, formData);
        }
        alert(res.data);
        console.log(res.data);
        window.location.reload();
      } catch (error) {}
    }
    if (role_id == 3) {
      const formData = new FormData();
      try {
        formData.append("contractor_name", contractor_name);
        formData.append("contractor_email", contractor_email);
        formData.append("contact", contact);
        formData.append("password", password);
        formData.append("project_id", project_id);
        formData.append("work", work);
        formData.append("duration", duration);
        formData.append("city", city);
        formData.append("state", state);
        formData.append("img", "img");
        let res = "";
        if (id) {
          res = await axios.put("/contractor/" + id, formData);
        }
        alert(res.data);
        console.log(res.data);
        window.location.reload();
      } catch (error) {}
    }
  };
  return <div>KKGOHIL</div>;
}

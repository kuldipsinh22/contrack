import { db } from "../db.js";

export const getProjects = (req, res) => {
  const query1 = "SELECT * FROM project";
  db.query(query1, (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
    Project;
  });
};

export const getProject = (req, res) => {
  const query = "select * from project where project_id=?";

  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json(data[0]);
  });
};

export const deleteProject = (req, res) => {
  const query = "DELETE FROM project where project_id=?";
  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json("admin has been deleted");
  });
};

export const insertProject = (req, res) => {
  const query =
    "INSERT INTO project( `sub_admin_name`, `sub_admin_email`, `contact`, `password`, `city`, `state`, `img`, `enrty_date`) values(?)";
  const date = new Date();
  const values = [
    req.body.sub_admin_name,
    req.body.sub_admin_email,
    req.body.contact,
    req.body.password,
    req.body.city,
    req.body.state,
    req.file?.filename,
    date,
  ];
  console.log(query);
  console.log(values);
  db.query(query, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("New admin has been added");
  });
};

export const updateProject = (req, res) => {
  const query =
    "UPDATE `project` SET `sub_admin_name`=?, `sub_admin_email`=?, `contact`=?, `password`=?, `city`=?, `state`=?, `img`=? where project_id=?";
  const values = [
    req.body.sub_admin_name,
    req.body.sub_admin_email,
    req.body.contact,
    req.body.password,
    req.body.city,
    req.body.state,
    req.file?.filename || req.body.img,
  ];
  console.log(query);
  db.query(query, [...values, req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json("admin data has been updated");
  });
};

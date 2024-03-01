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
    return res.json("project has been deleted");
  });
};

export const insertProject = (req, res) => {
  const query =
    "INSERT INTO project( `project_name`, `project_time`, `sub_admin_id`, `location`, `city`, `state`, `status`, `enrty_date`) values(?)";
  const date = new Date();
  const values = [
    req.body.project_name,
    req.body.project_time,
    req.body.sub_admin_id,
    req.body.location,
    req.body.city,
    req.body.state,
    req.body.status || 1,
    date,
  ];
  console.log(query);
  console.log(values);
  db.query(query, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("New project has been added");
  });
};

export const updateProject = (req, res) => {
  const query =
    "UPDATE `project` SET `project_name`=?, `project_time`=?, `sub_admin_id`=?, `location`=?, `city`=?, `state`=?, `status`=? where project_id=?";
  const values = [
    req.body.project_name,
    req.body.project_time,
    req.body.sub_admin_id,
    req.body.location,
    req.body.city,
    req.body.state,
    req.body.status || 1,
  ];
  console.log(query);
  db.query(query, [...values, req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json("project data has been updated");
  });
};

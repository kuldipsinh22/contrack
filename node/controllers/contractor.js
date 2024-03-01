import { db } from "../db.js";

export const getContractors = (req, res) => {
  const query1 = "SELECT * FROM contractor";
  db.query(query1, (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
};

export const getContractor = (req, res) => {
  const query = "select * from contractor where contractor_id=?";

  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json(data[0]);
  });
};

export const deleteContractor = (req, res) => {
  const query = "DELETE FROM contractor where contractor_id=?";
  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json("admin has been deleted");
  });
};

export const insertContractor = (req, res) => {
  const query =
    "INSERT INTO contractor( `contractor_name`, `contractor_email`, `contact`, `password`, `project_id`, `work`, `duration`, `city`, `state`, `status`, `img`) values(?)";
  const date = new Date();
  const values = [
    req.body.contractor_name,
    req.body.contractor_email,
    req.body.contact,
    req.body.password,
    req.body.project_id,
    req.body.work,
    req.body.duration,
    req.body.city,
    req.body.state,
    req.body.status || 1,
    req.file?.filename,
    date,
  ];
  console.log(query);
  console.log(values);
  db.query(query, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("New contractor has been added");
  });
};

export const updateContractor = (req, res) => {
  const query =
    "UPDATE `contractor` SET `contractor_name`=?, `contractor_email`=?, `contact`=?, `password`=?, `project_id`=?, `work`=?, `duration`=?, `city`=?, `state`=?, `status`=?, `img`=? where contractor_id=?";
  const values = [
    req.body.contractor_name,
    req.body.contractor_email,
    req.body.contact,
    req.body.password,
    req.body.project_id,
    req.body.work,
    req.body.duration,
    req.body.city,
    req.body.state,
    req.body.status || 1,
    req.file?.filename || req.body.img,
  ];
  console.log(query);
  db.query(query, [...values, req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json("contractor data has been updated");
  });
};

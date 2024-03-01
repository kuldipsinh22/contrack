import { db } from "../db.js";

export const getadmins = (req, res) => {
  const query1 = "SELECT * FROM Contractor";
  db.query(query1, (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
};

export const getadmin = (req, res) => {
  const query = "select * from Contractor where contractor_id=?";

  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json(data[0]);
  });
};

export const deleteadmin = (req, res) => {
  const query = "DELETE FROM Contractor where contractor_id=?";
  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json("admin has been deleted");
  });
};

export const insertadmin = (req, res) => {
  const query =
    "INSERT INTO Contractor( `contractor_name`, `contractor_email`, `contact`, `password`, `project_id`, `work`, `duration`, `city`, `state`, `status`, `password`, `img`) values(?)";
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
    req.body.password,
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

export const updateContractor = (req, res) => {
  const query =
    "UPDATE `admin` SET `contractor_name`=?, `contact`=?, `admin_email`=?, `password`=?, `img`=? where contractor_id=?";
  const values = [
    req.body.contractor_name,
    req.body.contact,
    req.body.admin_email,
    req.body.password,
    req.file?.filename || req.body.img,
  ];
  console.log(query);
  db.query(query, [...values, req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json("admin data has been updated");
  });
};
Contractor;

import { db } from "../db.js";

export const getSub_admins = (req, res) => {
  const query1 = "SELECT * FROM sub_admin";
  db.query(query1, (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
};

export const getSub_admin = (req, res) => {
  const query = "select * from sub_admin where sub_admin_id=?";

  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json(data[0]);
  });
};

export const deleteSub_admin = (req, res) => {
  const query = "DELETE FROM sub_admin where sub_admin_id=?";
  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json("admin has been deleted");
  });
};

export const insertSub_admin = (req, res) => {
  const query =
    "INSERT INTO sub_admin( `sub_admin_name`, `sub_admin_email`, `contact`, `password`, `city`, `state`, `img`, `enrty_date`) values(?)";
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

export const updateSub_admin = (req, res) => {
  const query =
    "UPDATE `sub_admin` SET `sub_admin_name`=?, `sub_admin_email`=?, `contact`=?, `password`=?, `city`=?, `state`=?, `img`=? where sub_admin_id=?";
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

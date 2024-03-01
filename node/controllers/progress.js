import { db } from "../db.js";

export const getProgressall = (req, res) => {
  const query1 = "SELECT * FROM in_progress";
  db.query(query1, (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
};

export const getProgress = (req, res) => {
  const query = "select * from in_progress where progress_id=?";

  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json(data[0]);
  });
};

export const deleteProgress = (req, res) => {
  const query = "DELETE FROM in_progress where progress_id=?";
  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json("admin has been deleted");
  });
};

export const insertProgress = (req, res) => {
  const query = "INSERT INTO in_progress(`task_id`, `entry_date`) values(?)";
  const date = new Date();
  const values = [req.body.task_id, date];
  console.log(query);
  console.log(values);
  db.query(query, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("New admin has been added");
  });
};

export const updateProgress = (req, res) => {
  const query = "UPDATE `in_progress` SET `task_id`=? where progress_id=?";
  const values = [req.body.task_id];
  console.log(query);
  db.query(query, [...values, req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json("admin data has been updated");
  });
};

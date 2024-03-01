import { db } from "../db.js";

export const getTaskDelayall = (req, res) => {
  const query1 = "SELECT * FROM task_delay";
  db.query(query1, (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
};

export const getTaskDelay = (req, res) => {
  const query = "select * from task_delay where delay_id=?";

  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json(data[0]);
  });
};

export const deleteTaskDelay = (req, res) => {
  const query = "DELETE FROM task_delay where delay_id=?";
  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json("admin has been deleted");
  });
};

export const insertTaskDelay = (req, res) => {
  const query =
    "INSERT INTO task_delay(`task_id`, `reason`, `status`, `entry_date`) values(?)";
  const date = new Date();
  const values = [
    req.body.task_id,
    req.file?.reasone,
    req.file?.status || 1,
    date,
  ];
  console.log(query);
  console.log(values);
  db.query(query, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("New admin has been added");
  });
};

export const updateTaskDelay = (req, res) => {
  const query =
    "UPDATE `task_delay` SET `task_id`=?, `reason`=?, `status`=? where delay_id=?";
  const values = [req.body.task_id, req.file?.reasone, req.file?.status || 1];
  console.log(query);
  db.query(query, [...values, req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json("admin data has been updated");
  });
};

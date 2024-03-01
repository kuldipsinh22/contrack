import { db } from "../db.js";

export const getTasks = (req, res) => {
  const query1 = "SELECT * FROM task";
  db.query(query1, (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
};

export const getTask = (req, res) => {
  const query = "select * from task where task_id=?";

  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json(data[0]);
  });
};

export const deleteTask = (req, res) => {
  const query = "DELETE FROM task where task_id=?";
  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json("Task has been deleted");
  });
};

export const insertTask = (req, res) => {
  const query =
    "INSERT INTO task( `sub_admin_id`, `contractor_id`, `task`, `duration`, `enrty_date`) values(?)";
  const date = new Date();
  const values = [
    req.body.sub_admin_id,
    req.body.contractor_id,
    req.body.task,
    req.body.duration,
    date,
  ];
  console.log(query);
  console.log(values);
  db.query(query, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("New Task has been added");
  });
};

export const updateTask = (req, res) => {
  const query =
    "UPDATE `task` SET `sub_admin_id`=?, `contractor_id`=?, `task`=?, `duration`=?Task task_id=?";
  const values = [
    req.body.sub_admin_id,
    req.body.contractor_id,
    req.body.task,
    req.body.duration,
  ];
  console.log(query);
  db.query(query, [...values, req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json("Task data has been updated");
  });
};
s;

import { db } from "../db.js";

export const getTaskDoneall = (req, res) => {
  const query1 = "SELECT * FROM task_done";
  db.query(query1, (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
};

export const getTaskDone = (req, res) => {
  const query = "select * from task_done where done_id=?";

  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json(data[0]);
  });
};

export const deleteTaskDone = (req, res) => {
  const query = "DELETE FROM task_done where done_id=?";
  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json("admin has been deleted");
  });
};

export const insertTaskDone = (req, res) => {
  const query =
    "INSERT INTO task_done(`task_id`, `img1`, `img2`, `img3`, `img4`, `img5`, `entry_date`) values(?)";
  const date = new Date();
  const values = [
    req.body.task_id,
    req.file?.filename,
    req.file?.filename,
    req.file?.filename,
    req.file?.filename,
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

export const updateTaskDone = (req, res) => {
  const query =
    "UPDATE `task_done` SET `task_id`=?, `img1`=?, `img2`=?, `img3`=?, `img4`=?, `img5`=? where done_id=?";
  const values = [
    req.body.task_id,
    req.file?.filename || req.body.img1,
    req.file?.filename || req.body.img2,
    req.file?.filename || req.body.img3,
    req.file?.filename || req.body.img4,
    req.file?.filename || req.body.img5,
  ];
  console.log(query);
  db.query(query, [...values, req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json("admin data has been updated");
  });
};

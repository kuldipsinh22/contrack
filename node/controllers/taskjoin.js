import { db } from "../db.js";

export const gettaskinjoin = (req, res) => {
  const query =
    "select a.*, b.*, c.* from a task, b sub_admin, c contractor where a.sub_admin_id = b.sub_admin_id and a.contractor_id = c.contractor_id";

  db.query(query1, (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
};

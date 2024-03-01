import express from "express";
import cors from "cors";
import router from "./models/r_admin.js";
import router2 from "./models/r_subadmin.js";
import router3 from "./models/r_project.js";
import router4 from "./models/r_task.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));
app.use("/track/admin", router);
app.use("/track/subadmin", router2);
app.use("/track/project", router3);
app.use("/track/task", router4);

app.listen(1122, () => {
  console.log("Server is running on 1122 port...");
});

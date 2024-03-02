import express from "express";
import cors from "cors";
import router from "./models/r_admin.js";
import router2 from "./models/r_subadmin.js";
import router3 from "./models/r_project.js";
import router4 from "./models/r_task.js";
import router5 from "./models/r_contractor.js";
import router6 from "./models/r_progtress.js";
import router7 from "./models/r_taskdone.js";
import router8 from "./models/r_delay.js";
import router9 from "./models/r_login.js";
import router10 from "./models/r_taskjoin.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));
app.use("/track/admin", router);
app.use("/track/subadmin", router2);
app.use("/track/projects", router3);
app.use("/track/task", router4);
app.use("/track/contractor", router5);
app.use("/track/progress", router6);
app.use("/track/done", router7);
app.use("/track/delay", router8);
app.use("/track/login", router9);
app.use("/track/taskjoin", router10);

app.listen(1122, () => {
  console.log("Server is running on 1122 port...");
});

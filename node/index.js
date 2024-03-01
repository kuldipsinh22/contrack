import express from "express";
import cors from "cors";
import router from "./models/r_admin.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));
app.use("/track/admin", router);

app.listen(1122, () => {
  console.log("Server is running on 1122 port...");
});

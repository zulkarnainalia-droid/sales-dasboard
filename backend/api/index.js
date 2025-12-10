import express from "express";
import cors from "cors";

const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ status: "OK" });
});

app.get("/api/test", (req, res) => {
  res.json({ message: "API test berhasil" });
});

export default app;





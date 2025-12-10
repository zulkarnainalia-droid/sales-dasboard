import express from "express";
const cors = require("cors");
const app = express();

app.use(cors({
  origin: "*"
}));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Backend OK" });
});

export default function handler(req, res) {
  res.status(200).json({ status: "OK" });
}

// WAJIB!
module.exports = app;

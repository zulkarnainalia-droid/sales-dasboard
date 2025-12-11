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


// WAJIB!
module.exports = app;

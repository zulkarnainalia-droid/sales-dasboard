import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Backend OK" });
});


// WAJIB!
module.exports = app;

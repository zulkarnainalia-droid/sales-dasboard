import express from "express";
const app = express();

app.get("/api/users", (req, res) => {
  res.json([
    { id: 1, name: "Admin" },
    { id: 2, name: "User" }
  ]);

// WAJIB!
export default app;

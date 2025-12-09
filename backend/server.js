import express from "express";
import cors from "cors";
import salesRoutes from "./src/routes/sales.routes.js";
import customerRoutes from "./src/routes/customer.routes.js";
import dotenv from "dotenv";
dotenv.config();

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "API is running in Vercel!" });
});

// WAJIB: Export app sebagai handler untuk serverless
module.exports = app;

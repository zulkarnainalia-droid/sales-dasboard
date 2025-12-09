import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ status: "OK" });
});

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "Backend Express ES Module berjalan",
  });
});

export default app;

import express from "express";
import cors from "cors";

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// ✅ root endpoint (WAJIB)
app.get("/", (req, res) => {
  res.status(200).json({ status: "OK" });
});

// ✅ endpoint test
app.get("/api/test", (req, res) => {
  res.status(200).json({
    message: "API test berhasil",
  });
});

// ✅ WAJIB UNTUK VERCEL
export default app;

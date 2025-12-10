import express from "express";
import cors from "cors";

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// ✅ root endpoint (OK)
app.get("/", (req, res) => {
  res.status(200).json({ status: "OK" });
});

// ✅ test endpoint
app.get("/api/test", (req, res) => {
  res.status(200).json({
    message: "API test berhasil",
  });
});

// ✅ DASHBOARD ENDPOINT (WAJIB UNTUK FRONTEND)
app.get("/api/dashboard", (req, res) => {
  res.status(200).json({
    kpi: {
      revenue: 120000000,
      orders: 320,
      customers: 85,
    },
    categories: [
      { name: "Electronics", value: 45 },
      { name: "Fashion", value: 30 },
      { name: "Food", value: 25 },
    ],
    topCustomers: [
      { name: "PT ABC", total: 25000000 },
      { name: "CV Jaya", total: 18000000 },
      { name: "UD Makmur", total: 12000000 },
    ],
  });
});

// ✅ WAJIB UNTUK VERCEL
export default app;

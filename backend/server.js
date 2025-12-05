import express from "express";
import cors from "cors";
import salesRoutes from "./src/routes/sales.routes.js";
import customerRoutes from "./src/routes/customer.routes.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/sales", salesRoutes);
app.use("/api/customers", customerRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`API running on port ${port}`));

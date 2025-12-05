import express from "express";
import { getKPIs, getCategoryDistribution, getTopCustomers } from "../controllers/sales.controller.js";

const router = express.Router();

router.get("/kpi", getKPIs);
router.get("/category-distribution", getCategoryDistribution);
router.get("/top-customers", getTopCustomers);

export default router;

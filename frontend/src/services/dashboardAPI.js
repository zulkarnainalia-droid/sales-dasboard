import axios from "axios";
const api = axios.create({ baseURL: import.meta.env.VITE_API_BASE || 'http://localhost:3000' });

export const getKPIs = () => api.get("/api/sales/kpi");
export const getCategoryData = () => api.get("/api/sales/category-distribution");
export const getTopCustomers = () => api.get("/api/sales/top-customers");

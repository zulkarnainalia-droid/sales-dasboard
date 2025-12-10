import React, { useEffect, useState } from "react";
import KPICards from "./components/KPICards";
import CategoryChart from "./components/CategoryChart";
import TopCustomerTable from "./components/TopCustomerTable";

export default function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const API_URL = import.meta.env.VITE_API_URL;

    console.log("API URL:", API_URL);

    fetch(`${API_URL}/api/dashboard`)
      .then((res) => {
        if (!res.ok) throw new Error("API error");
        return res.json();
      })
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <h2>Loading dashboard...</h2>;
  if (error) return <h2>Error: {error}</h2>;

  return (
    <div style={{ padding: 24, fontFamily: "Inter, Arial" }}>
      <h1>Sales Performance Dashboard</h1>

      <KPICards data={data.kpi} />

      <div style={{ display: "flex", gap: 20, marginTop: 20 }}>
        <div style={{ flex: 1 }}>
          <CategoryChart data={data.categories} />
        </div>

        <div style={{ width: 420 }}>
          <TopCustomerTable data={data.topCustomers} />
        </div>
      </div>
    </div>
  );
}

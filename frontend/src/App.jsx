import React, { useEffect, useState } from "react";
import KPICards from "./components/KPICards";
import CategoryChart from "./components/CategoryChart";
import TopCustomerTable from "./components/TopCustomerTable";

export default function App() {
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

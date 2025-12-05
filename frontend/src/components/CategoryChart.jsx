import React, {useEffect, useState} from "react";
import { Bar } from "react-chartjs-2";
import { getCategoryData } from "../services/dashboardAPI";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function CategoryChart(){
  const [data, setData] = useState([]);
  useEffect(()=> {
    getCategoryData().then(r => setData(r.data)).catch(()=>{});
  },[]);
  const chartData = {
    labels: data.map(d=>d.category),
    datasets: [{ label:'Revenue', data: data.map(d=>d.revenue) }]
  };
  return (
    <div className="card">
      <h3>Revenue by Category</h3>
      <Bar data={chartData} />
    </div>
  );
}

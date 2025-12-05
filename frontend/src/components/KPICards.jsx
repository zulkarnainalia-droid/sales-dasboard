import React, {useEffect, useState} from "react";
import { getKPIs } from "../services/dashboardAPI";

export default function KPICards(){
  const [kpi, setKpi] = useState(null);
  useEffect(()=> {
    getKPIs().then(r=> setKpi(r.data)).catch(()=>{});
  },[]);
  return (
    <div style={{display:'flex', gap:12}}>
      <div className="card" style={{minWidth:180}}>
        <div>Total Sales</div>
        <div style={{fontSize:20, fontWeight:700}}>
          {kpi ? (kpi.total_sales ?? 0) : '—'}
        </div>
      </div>
      <div className="card" style={{minWidth:180}}>
        <div>Months</div>
        <div style={{fontSize:20, fontWeight:700}}>
          {kpi ? (kpi.months_count ?? '—') : '—'}
        </div>
      </div>
    </div>
  );
}

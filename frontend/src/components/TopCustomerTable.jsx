import React, {useEffect, useState} from "react";
import { getTopCustomers } from "../services/dashboardAPI";

export default function TopCustomerTable(){
  const [rows, setRows] = useState([]);
  useEffect(()=> {
    getTopCustomers().then(r=> setRows(r.data)).catch(()=>{});
  },[]);
  return (
    <div className="card">
      <h3>Top Customers</h3>
      <table style={{width:'100%', borderCollapse:'collapse'}}>
        <thead>
          <tr><th align="left">Customer</th><th align="right">Total Spent</th></tr>
        </thead>
        <tbody>
          {rows.map((r,i)=>(
            <tr key={i}>
              <td>{r.name}</td>
              <td align="right">{r.total_spent}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

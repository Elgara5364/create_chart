import React from "react";
import Chart from "../../components/Chart";
import DoughnutChart from "../../components/DoughnutChart";
import LineChart from "../../components/LineChart";
import PieChart from "../../components/PieChart";
import LineChartApex from "../../components/LineChartApex";

const Dashboards = () => {
  return (
    <div>
      <h1>ini dashboards</h1>
      <Chart />

      <h1>Doughnut Chart</h1>
      <DoughnutChart />

      <h1>Line Charts</h1>
      <LineChart />
      <h1>Pie Charts</h1>
      <PieChart />

      <h1>CHart Apex</h1>
      <LineChartApex />
    </div>
  );
};

export default Dashboards;

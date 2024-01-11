import React from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const datas = {
    data_penjualan: [100, 300, 250, 50],
    data_pemasukkan: [200, 600, 500, 100],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };

  const labels = ["Jan", "Feb", "Mar", "Apr"];

  const data = {
    labels,
    datasets: [
      {
        label: "Data Penjualan",
        data: datas.data_penjualan,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Data Pemasukkan",
        data: datas.data_pemasukkan,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  return (
    <div>
      <Line options={options} data={data} />;
    </div>
  );
};

export default LineChart;

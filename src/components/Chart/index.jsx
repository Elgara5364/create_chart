import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
// import { Doughnut } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Chart = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "data Pemasukkan",
        data: [500, 100, 450, 600, 550, 750, 300],
        backgroundColor: "red",
      },
      {
        label: "data Penjualan",
        data: [700, 300, 500, 900, 250, 350, 400],
        backgroundColor: "blue",
      },
    ],
  };
  return (
    <div>
      <h1>ini Charts</h1>
      <Bar options={options} data={data} />
    </div>
  );
};

export default Chart;

import React, { useContext, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Context } from "..";

ChartJS.register(ArcElement, Tooltip, Legend);
export default function App(props) {
  const { categories } = useContext(Context);
  const [state]=useState( categories.map((item)=>item))
  const data = {
    labels: [...state],
    datasets: [
      {
        label: "# of Votes",
        data: props.data,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 205, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(25, 69, 132, 0.2)",
          "cyan",
          "rgba(14, 145, 25, 0.2)",
          "rgba(250, 24, 106, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "purple",
          "green",
          "orange",
          "crimson",
          "rgba(25, 109, 12, 0.2)",
          "rgba(14, 145, 25, 0.2)",
          "rgba(250, 24, 106, 0.2)",
        ],
        borderWidth: 1,
      },
    ],
  };
  
  return (
    <Doughnut
      data={data}
      width={200}
      height={200}
      options={{ maintainAspectRatio: false }}
      // ref={chartRef}
      type="line"
    />
  );
}

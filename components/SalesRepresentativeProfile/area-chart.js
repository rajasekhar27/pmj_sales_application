import React from "react";

import Chart from "react-apexcharts";

export default function AreaCharts({ color, type }) {
  const state = {
    options: {
      chart: {
        id: "revenue",
        toolbar: {
          show: false,
        },
        sparkline: {
          enabled: true,
        },
      },
      grid: {
        show: false,
      },
      colors: [color],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 2.5,
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 0.8,
          opacityFrom: 0.7,
          opacityTo: 0.5,
          stops: [0, 80, 100],
        },
      },

      xaxis: {
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
      tooltip: {
        x: { show: false },
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 90, 45, 50, 70, 60, 80, 41],
      },
    ],
  };
  return (
    <div>
      <Chart
        height={100}
        options={state.options}
        series={state.series}
        type={type}
      />
    </div>
  );
}

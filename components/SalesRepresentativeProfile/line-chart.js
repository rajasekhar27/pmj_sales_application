import React from "react";

import Chart from "react-apexcharts";

export default function LineCharts({ color, type }) {
  const state = {
    options: {
      chart: {
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
        dropShadow: {
          enabled: true,
          top: 5,
          left: 0,
          blur: 4,
          opacity: 0.1,
        },
      },
      grid: {
        borderColor: "#EBEBEB",
        strokeDashArray: 5,
        xaxis: {
          lines: {
            show: true,
          },
        },
        yaxis: {
          lines: {
            show: false,
          },
        },
        padding: {
          top: -30,
          bottom: -10,
        },
      },

      stroke: {
        curve: "smooth",
        width: 7,
      },
      colors: [color],
      series: [
        {
          data: [0, 20, 5, 30, 15, 45],
        },
      ],

      xaxis: {
        labels: {
          show: true,
          style: {
            fontSize: "0px",
          },
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        show: false,
      },
      tooltip: {
        x: {
          show: false,
        },
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
        height={70}
        options={state.options}
        series={state.series}
        type={type}
      />
    </div>
  );
}

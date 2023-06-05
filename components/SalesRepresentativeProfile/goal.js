import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Row,
  Col,
  CardText,
} from "reactstrap";
import Chart from "react-apexcharts";

export default function Goal() {
  const options = {
      chart: {
        sparkline: {
          enabled: true,
        },
        dropShadow: {
          enabled: true,
          blur: 3,
          left: 1,
          top: 1,
          opacity: 0.1,
        },
      },
      colors: ["#400120"],
      plotOptions: {
        radialBar: {
          offsetY: 10,
          startAngle: -150,
          endAngle: 150,
          hollow: {
            size: "70%",
          },
          track: {
            background: "#ebe9f1",
            strokeWidth: "50%",
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              color: "#5e5873",
              fontFamily: "Montserrat",
              fontSize: "18px",
              fontWeight: "500",
            },
          },
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "horizontal",
          shadeIntensity: 0.5,
          gradientToColors: ["#400120"],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100],
        },
      },
      stroke: {
        lineCap: "round",
      },
      grid: {
        padding: {
          bottom: 30,
        },
      },
    },
    series = [83];

  return (
    <Card className="bg-white rounded-md">
      <CardHeader>
        <h1 className="font-medium text-md text-rep mx-4 mt-3">Goal</h1>
      </CardHeader>
      <CardBody className="p-0">
        <Chart
          options={options}
          series={series}
          type="radialBar"
          height={180}
        />
      </CardBody>
      <Row className="border-top text-center mx-0 flex justify-between items-center  border-t pt-2 pb-2">
        <Col className="border-end py-1 border-r w-full px-1">
          <h1 className="font-normal text-sm text-position">Completed</h1>
          <h3 className="font-semibold text-lg text-rep">786,617</h3>
        </Col>
        <Col className="py-1 w-full">
          <h1 className="font-normal text-sm text-position px-1">
            In Progress
          </h1>
          <h3 className="font-semibold text-lg text-rep">13,561</h3>
        </Col>
      </Row>
    </Card>
  );
}

import {
  Row,
  Col,
  Card,
  Button,
  CardBody,
  CardText,
  Progress,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";

import Chart from "react-apexcharts";
import ProgressBar from "./progressbar";

export default function AverageSessions() {
  const options = {
      chart: {
        sparkline: { enabled: true },
        toolbar: { show: false },
      },
      grid: {
        show: false,
        padding: {
          left: 0,
          right: 0,
        },
      },
      states: {
        hover: {
          filter: "none",
        },
      },
      colors: [
        "#ebf0f7",
        "#ebf0f7",
        "#400120",
        "#ebf0f7",
        "#ebf0f7",
        "#ebf0f7",
      ],
      plotOptions: {
        bar: {
          columnWidth: "45%",
          distributed: true,
          borderRadius: [10],
        },
      },
      tooltip: {
        x: { show: false },
      },
      xaxis: {
        type: "numeric",
      },
    },
    series = [
      {
        name: "Sessions",
        data: [75, 125, 225, 175, 125, 75, 25],
      },
    ];

  return (
    <Card className="bg-white  p-2">
      <CardBody>
        <Row className="pb-50 flex ">
          <Col className="d-flex justify-content-between flex-column mt-lg-0 mt-2 w-full">
            <div className="session-info mb-1 mb-lg-0">
              <h2 className=" mb-25 font-semibold text-lg text-rep">2.7k</h2>
              <h1 className=" mb-2 font-medium text-sm text-rep">
                Avg Sessions
              </h1>
              <h5 className="font-normal text-sm text-position">
                <span className="text-online mr-1">+5.2%</span>
                <span className="font-normal text-sm text-position">
                  vs last 7 days
                </span>
              </h5>
            </div>
            <button className="bg-liveprice text-white  px-2 py-1 font-medium text-xs">
              View Details
            </button>
          </Col>

          <Col className="d-flex justify-content-between flex-column text-end w-full">
            <UncontrolledDropdown className="chart-dropdown">
              <DropdownToggle
                color=""
                className="font-normal text-sm text-position"
              >
                Last 7 days
              </DropdownToggle>
            </UncontrolledDropdown>
            <Chart options={options} series={series} type="bar" height={150} />
          </Col>
        </Row>
        <hr />
        <Row className="pt-4 flex justify-between ">
          <Col className="mb-2">
            <p className="mb-50">Goal: $1000000</p>
            <ProgressBar
              width={130}
              percent={0.5}
              color={"#400120"}
              bg={"rgba(115, 103, 240, 0.12)"}
            />
          </Col>
          <Col className="mb-2">
            <p className="mb-50">Users: 100k</p>
            <ProgressBar
              width={130}
              percent={0.7}
              color={"#FF9F43"}
              bg={"rgba(255, 159, 67, 0.12)"}
            />
          </Col>
        </Row>
        <Row className="flex justify-between">
          <Col>
            <p className="mb-50">Retention: 90%</p>
            <ProgressBar
              width={130}
              percent={0.3}
              color={"#EA5455"}
              bg={"rgba(234, 84, 85, 0.12)"}
            />
          </Col>
          <Col>
            <p className="mb-50">Duration: 1yr</p>
            <ProgressBar
              width={130}
              percent={1.0}
              color={"#28C76F"}
              bg={"rgba(40, 199, 111, 0.12)"}
            />
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
}

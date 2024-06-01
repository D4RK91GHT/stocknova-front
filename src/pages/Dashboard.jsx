import React from "react";
import { Card, Col, Row } from "react-bootstrap";

import ReactApexChart from "react-apexcharts";
import Sidebar from "../components/Sidebar";
import DashboardNavbar from "../components/DashboardNavbar";
import CurrentNifty from "../components/CurrentNifty";
import WatchList from "../components/WatchList";
import DashboardNumbers from "../components/DashboardNumbers";

const Dashboard = () => {
  const seriesTwo = [
    {
      type: "column",
      data: [
        [0, 10],
        [1, 20],
        [2, 35],
        [3, 30],
        [4, 35],
        [5, 50],
        [6, 30],
        [7, 25],
        [8, 15],
        [9, 20],
        [10, 32],
        [11, 40],
        [12, 55],
        [13, 40],
        [14, 30],
        [15, 20],
        [16, 34],
        [17, 45],
        [18, 35],
        [19, 20],
        [20, 40],
        [21, 20],
        [22, 35],
        [23, 30],
        [24, 35],
        [25, 50],
        [26, 30],
        [27, 25],
        [28, 15],
        [29, 20],
        [30, 32],
        [31, 40],
        [32, 55],
        [33, 40],
        [34, 30],
        [35, 20],
        [36, 34],
        [37, 45],
        [38, 35],
        [39, 20],
        [40, 40],
      ],
    },
    {
      type: "area",
      data: [
        [0, 70],
        [1, 71],
        [2, 70],
        [3, 70],
        [4, 78],
        [5, 79],
        [6, 75],
        [7, 70],
        [8, 75],
        [9, 72],
        [10, 74],
        [11, 76],
        [12, 80],
        [13, 81],
        [14, 80],
        [15, 78],
        [16, 80],
        [17, 82],
        [18, 87],
        [19, 80],
        [20, 81],
        [21, 80],
        [22, 70],
        [23, 70],
        [24, 71],
        [25, 75],
        [26, 74],
        [27, 76],
        [28, 80],
        [29, 80],
        [30, 80],
        [31, 76],
        [32, 75],
        [33, 80],
        [34, 81],
        [35, 80],
        [36, 79],
        [37, 78],
        [38, 80],
        [39, 81],
        [40, 80],
      ],
    },
  ];

  const optionTwo = {
    chart: {
      parentHeightOffset: 0,
      type: "line",
      toolbar: { show: false },
    },
    states: {
      hover: {
        filter: { type: "none" },
      },
      active: {
        filter: { type: "none" },
      },
    },
    colors: ["#c1ccf1", "#506fd9"],
    grid: {
      borderColor: "rgba(72,94,144, 0.07)",
      padding: {
        top: -20,
        bottom: -5,
      },
      yaxis: {
        lines: { show: false },
      },
    },
    fill: {
      type: ["solid", "gradient"],
      gradient: {
        type: "vertical",
        opacityFrom: 0.35,
        opacityTo: 0.2,
        gradientToColors: ["#f3f5fc"],
      },
    },
    stroke: {
      width: [0, 1.5],
    },
    xaxis: {
      type: "numeric",
      tickAmount: 8,
      decimalsInFloat: 0,
      labels: {
        style: {
          colors: "#6e7985",
          fontSize: "9px",
        },
      },
      axisBorder: { show: false },
    },
    yaxis: {
      show: false,
      min: 0,
      max: 100,
    },
    legend: { show: false },
    tooltip: { enabled: false },
  };

  const seriesThree = [
    {
      type: "column",
      data: [
        [0, 32],
        [1, 40],
        [2, 55],
        [3, 40],
        [4, 30],
        [5, 20],
        [6, 34],
        [7, 45],
        [8, 35],
        [9, 20],
        [10, 40],
        [11, 20],
        [12, 35],
        [13, 30],
        [14, 35],
        [15, 50],
        [16, 30],
        [17, 25],
        [18, 15],
        [19, 20],
        [20, 32],
        [21, 40],
        [22, 55],
        [23, 40],
        [24, 30],
        [25, 20],
        [26, 34],
        [27, 45],
        [28, 35],
        [29, 20],
        [30, 40],
        [31, 20],
        [32, 35],
        [33, 30],
        [34, 35],
        [35, 50],
        [36, 30],
        [37, 25],
        [38, 15],
        [39, 20],
        [40, 32],
      ],
    },
    {
      type: "area",
      data: [
        [0, 82],
        [1, 80],
        [2, 85],
        [3, 80],
        [4, 76],
        [5, 70],
        [6, 74],
        [7, 75],
        [8, 75],
        [9, 70],
        [10, 71],
        [11, 72],
        [12, 75],
        [13, 80],
        [14, 85],
        [15, 80],
        [16, 70],
        [17, 95],
        [18, 95],
        [19, 90],
        [20, 92],
        [21, 90],
        [22, 95],
        [23, 90],
        [24, 90],
        [25, 90],
        [26, 84],
        [27, 85],
        [28, 85],
        [29, 80],
        [30, 70],
        [31, 70],
        [32, 75],
        [33, 70],
        [34, 75],
        [35, 80],
        [36, 75],
        [37, 85],
        [38, 78],
        [39, 70],
        [40, 82],
      ],
    },
  ];

  const optionThree = {
    chart: {
      parentHeightOffset: 0,
      type: "line",
      toolbar: { show: false },
    },
    states: {
      hover: {
        filter: { type: "none" },
      },
      active: {
        filter: { type: "none" },
      },
    },
    colors: ["#cde1ff", "#85b6ff"],
    grid: {
      borderColor: "rgba(72,94,144, 0.07)",
      padding: {
        top: -20,
        bottom: -5,
      },
      yaxis: {
        lines: { show: false },
      },
    },
    fill: {
      type: ["solid", "gradient"],
      gradient: {
        type: "vertical",
        opacityFrom: 0.35,
        opacityTo: 0.2,
        gradientToColors: ["#f3f5fc"],
      },
    },
    stroke: {
      width: [0, 1.5],
    },
    xaxis: {
      type: "numeric",
      tickAmount: 8,
      decimalsInFloat: 0,
      labels: {
        style: {
          colors: "#6e7985",
          fontSize: "9px",
        },
      },
      axisBorder: { show: false },
    },
    yaxis: {
      show: false,
      min: 0,
      max: 100,
    },
    legend: { show: false },
    tooltip: { enabled: false },
  };

  return (
    <>
      <DashboardNavbar />
      <Sidebar />
      <div className="main main-app p-3 p-lg-4">
        <Row className="g-3">
          <Col xl="12">
            <Card className="card-one">
              <Card.Body className="overflow-hidden px-0 pb-3">
                <CurrentNifty />
              </Card.Body>
            </Card>
          </Col>
          <Col xl="5">
            <WatchList />
          </Col>
          <Col xl="3">
            <Row className="g-3">
              <Col sm="6" xl="12">
                <Card className="card-one">
                  <Card.Body className="overflow-hidden">
                    <h2 className="card-value mb-1">
                      75<span>%</span>
                    </h2>
                    <h6 className="text-dark fw-semibold mb-1">
                      Gross Profit Margin
                    </h6>
                    <p className="fs-xs text-secondary mb-0 lh-4">
                      The gross profit you make on each dollar of sales.
                    </p>

                    <ReactApexChart
                      series={seriesTwo}
                      options={optionTwo}
                      height={100}
                      className="apex-chart-three"
                    />
                  </Card.Body>
                </Card>
              </Col>
              <Col sm="6" xl="12">
                <Card className="card-one">
                  <Card.Body>
                    <h2 className="card-value mb-1">
                      68<span>%</span>
                    </h2>
                    <h6 className="text-dark fw-semibold mb-1">
                      Net Profit Margin
                    </h6>
                    <p className="fs-xs text-secondary mb-0 lh-4">
                      Measures your business at generating profit sales.
                    </p>

                    <ReactApexChart
                      series={seriesThree}
                      options={optionThree}
                      height={100}
                      className="apex-chart-three"
                    />
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
        <Col>
          <DashboardNumbers />
        </Col>
      </div>
    </>
  );
};

export default Dashboard;

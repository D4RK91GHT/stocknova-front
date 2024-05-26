import React from "react";
import ReactApexChart from "react-apexcharts";
import { dp3 } from "../data/DashboardData";
import { Card, Col } from "react-bootstrap";

const StockCards = () => {
  var chart = {
    parentHeightOffset: 0,
    toolbar: { show: false },
    stacked: true,
  };

  var grid = {
    borderColor: "rgba(72,94,144, 0.07)",
    padding: {
      top: -20,
      left: -20,
      right: -20,
      bottom: 0,
    },
    yaxis: {
      lines: { show: false },
    },
  };

  var stroke = {
    curve: "straight",
    width: 1.5,
  };

  var fill = {
    type: "gradient",
    gradient: {
      opacityFrom: 0.5,
      opacityTo: 0,
    },
  };

  var yaxis = {
    min: 0,
    max: 80,
    show: false,
  };

  function setOption(color, min, max) {
    return {
      chart: chart,
      colors: [color],
      grid: grid,
      stroke: stroke,
      xaxis: {
        type: "numeric",
        tickAmount: 6,
        min: min,
        max: max,
        decimalsInFloat: 0,
        axisBorder: { show: false },
        labels: {
          style: {
            colors: "#6e7985",
            fontSize: "9px",
          },
        },
      },
      yaxis: yaxis,
      fill: fill,
      dataLabels: { enabled: false },
      legend: { show: false },
      tooltip: { enabled: false },
    };
  }

  return (
    <>
      <Col sm="6" xl="3">
        <Card className="card-one">
          <Card.Body className="overflow-hidden px-0">
            <div className="crypto-item">
              <div className="avatar bg-orange">
                <i className="cf cf-btc"></i>
              </div>
              <div className="crypto-body">
                <label className="card-label">
                  Bitcoin <span>(BTC)</span>
                </label>
                <h6 className="card-value">$3,972.87</h6>
              </div>
            </div>
            <ReactApexChart
              series={[
                {
                  data: dp3,
                },
              ]}
              options={setOption("#fd7e14", 5, 55)}
              type="area"
              height={100}
              className="apex-chart-ten"
            />
          </Card.Body>
          <Card.Footer className="card-footer-crypto pt-0">
            <div>
              <strong>12</strong> USD Markets
            </div>
            <div>
              <strong>80</strong> BTC Markets
            </div>
          </Card.Footer>
        </Card>
      </Col>
      <Col sm="6" xl="3">
        <Card className="card-one">
          <Card.Body className="overflow-hidden px-0">
            <div className="crypto-item">
              <div className="avatar bg-twitter">
                <i className="cf cf-etc"></i>
              </div>
              <div className="crypto-body">
                <label className="card-label">
                  Ethereum <span>(ETC)</span>
                </label>
                <h6 className="card-value">$136.99</h6>
              </div>
            </div>
            <ReactApexChart
              series={[
                {
                  data: dp3,
                },
              ]}
              options={setOption("#1c96e9", 45, 95)}
              type="area"
              height={100}
              className="apex-chart-ten"
            />
          </Card.Body>
          <Card.Footer className="card-footer-crypto pt-0">
            <div>
              <strong>10</strong> USD Markets
            </div>
            <div>
              <strong>65</strong> ETH Markets
            </div>
          </Card.Footer>
        </Card>
      </Col>
      <Col sm="6" xl="3">
        <Card className="card-one">
          <Card.Body className="overflow-hidden px-0">
            <div className="crypto-item">
              <div className="avatar bg-success">
                <i className="cf cf-btc"></i>
              </div>
              <div className="crypto-body">
                <label className="card-label">
                  Bitcoin Cash <span>(BCH)</span>
                </label>
                <h6 className="card-value">$160.43</h6>
              </div>
            </div>
            <ReactApexChart
              series={[
                {
                  data: dp3,
                },
              ]}
              options={setOption("#0cb785", 15, 75)}
              type="area"
              height={100}
              className="apex-chart-ten"
            />
          </Card.Body>
          <Card.Footer className="card-footer-crypto pt-0">
            <div>
              <strong>12</strong> USD Markets
            </div>
            <div>
              <strong>74</strong> BCH Markets
            </div>
          </Card.Footer>
        </Card>
      </Col>
      <Col sm="6" xl="3">
        <Card className="card-one">
          <Card.Body className="overflow-hidden px-0">
            <div className="crypto-item">
              <div className="avatar bg-primary">
                <i className="cf cf-dash"></i>
              </div>
              <div className="crypto-body">
                <label className="card-label">
                  Dash <span>(DASH)</span>
                </label>
                <h6 className="card-value">$90.58</h6>
              </div>
            </div>
            <ReactApexChart
              series={[
                {
                  data: dp3,
                },
              ]}
              options={setOption("#506fd9", 35, 85)}
              type="area"
              height={100}
              className="apex-chart-ten"
            />
          </Card.Body>
          <Card.Footer className="card-footer-crypto pt-0">
            <div>
              <strong>16</strong> USD Markets
            </div>
            <div>
              <strong>31</strong> DASH Markets
            </div>
          </Card.Footer>
        </Card>
      </Col>
    </>
  );
};

export default StockCards;
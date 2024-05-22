import React, { useEffect, useState } from "react";
import DashboardNavbar from "../components/DashboardNavbar";
import Sidebar from "../components/Sidebar";
import TickersList from "../components/TickersList";

import { Card, Row, Col, Nav, ListGroup } from "react-bootstrap";

import ReactApexChart from "react-apexcharts";
import { dp3 } from "../data/DashboardData";

import "cryptofont/css/cryptofont.css";

export default function Stocks() {
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

  const currentSkin = localStorage.getItem("skin-mode") ? "dark" : "";
  const [skin, setSkin] = useState(currentSkin);

  const switchSkin = (skin) => {
    if (skin === "dark") {
      const btnWhite = document.getElementsByClassName("btn-white");

      for (const btn of btnWhite) {
        btn.classList.add("btn-outline-primary");
        btn.classList.remove("btn-white");
      }
    } else {
      const btnOutlinePrimary = document.getElementsByClassName(
        "btn-outline-primary"
      );

      for (const btn of btnOutlinePrimary) {
        btn.classList.remove("btn-outline-primary");
        btn.classList.add("btn-white");
      }
    }
  };

  switchSkin(skin);

  useEffect(() => {
    switchSkin(skin);
  }, [skin]);

  return (
    <React.Fragment>
      <DashboardNavbar onSkin={setSkin} />
      <Sidebar />

      <div className="main main-app p-3 p-lg-4">
        <Row className="g-3">
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
          
          <Col md="8" xl="8">
            <TickersList />
          </Col>

          <Col sm="4" xl="4">
            <Card className="card-one">
              <Card.Header>
                <Card.Title as="h6">Price Indexes</Card.Title>
                <Nav className="nav-icon nav-icon-sm ms-auto">
                  <Nav.Link href="">
                    <i className="ri-refresh-line"></i>
                  </Nav.Link>
                  <Nav.Link href="">
                    <i className="ri-more-2-fill"></i>
                  </Nav.Link>
                </Nav>
              </Card.Header>
              <Card.Body>
                <ListGroup as="ul" className="list-group-one">
                  {[
                    {
                      icon: "btc",
                      bg: "orange",
                      name: "Bitcoin",
                      value: "$4,000.19",
                      percent: "0.27%",
                      success: true,
                    },
                    {
                      icon: "eth",
                      bg: "twitter",
                      name: "Ethereum",
                      value: "$138.90",
                      percent: "0.35%",
                      success: true,
                    },
                    {
                      icon: "ltc",
                      bg: "litecoin",
                      name: "Litecoin",
                      value: "$59.95",
                      percent: "0.05%",
                      success: true,
                    },
                    {
                      icon: "btc",
                      bg: "success",
                      name: "Bitcoin Cash",
                      value: "$160.28",
                      percent: "-0.19%",
                      success: false,
                    },
                    {
                      icon: "dash",
                      bg: "primary",
                      name: "Dash",
                      value: "$92.20",
                      percent: "-0.21%",
                      success: false,
                    },
                    {
                      icon: "bsd",
                      bg: "ui-02",
                      name: "Bitsend",
                      value: "$56.53",
                      percent: "2.86%",
                      success: true,
                    },
                    {
                      icon: "bcn",
                      bg: "pink",
                      name: "Bytecoin",
                      value: "$0.76",
                      percent: "-1.32%",
                      success: false,
                    },
                    {
                      icon: "dmd",
                      bg: "info",
                      name: "Diamond",
                      value: "$280.80",
                      percent: "2.01%",
                      success: true,
                    },
                    {
                      icon: "emc",
                      bg: "danger",
                      name: "Emercoin",
                      value: "$48.25",
                      percent: "1.22%",
                      success: true,
                    },
                  ].map((item, index) => (
                    <ListGroup.Item
                      key={index}
                      as="li"
                      className="px-0 d-flex align-items-center gap-2"
                    >
                      <div className={"avatar text-white bg-" + item.bg}>
                        <i className={"cf cf-" + item.icon}></i>
                      </div>
                      <div>
                        <h6 className="mb-0">{item.name}</h6>
                        <small>{item.icon.toUpperCase()}/USD</small>
                      </div>
                      <div className="ms-auto text-end">
                        <h6 className="ff-numerals mb-0">{item.value}</h6>
                        <small
                          className={
                            "text-" + (item.success ? "success" : "danger")
                          }
                        >
                          {item.percent}
                        </small>
                      </div>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* <Footer /> */}
      </div>
    </React.Fragment>
  );
}

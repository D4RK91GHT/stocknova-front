import React from "react";
import { Card, Col, Row } from "react-bootstrap";

import Sidebar from "../components/Sidebar";
import DashboardNavbar from "../components/DashboardNavbar";
import CurrentNifty from "../components/CurrentNifty";
import WatchList from "../components/WatchList";
const Dashboard = () => {
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
          <Col>
            <WatchList />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Dashboard;

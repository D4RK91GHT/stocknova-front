import React from "react";
import DashboardNavbar from "../components/DashboardNavbar";
import Sidebar from "../components/Sidebar";
import PredictCard from "../components/PredictCard";

import { Row, Col} from "react-bootstrap";

export default function Stocks() {

  return (
    <>
      <DashboardNavbar />
      <Sidebar />

      <div className="main main-app p-3 p-lg-4">
        <Row className="g-3">
          <Col md="12" xl="12">
            <PredictCard />
          </Col>
        </Row>
      </div>
    </>
  );
}

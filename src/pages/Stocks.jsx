import React from "react";
import DashboardNavbar from "../components/DashboardNavbar";
import Sidebar from "../components/Sidebar";
import TickersList from "../components/TickersList";

import { Row, Col} from "react-bootstrap";

import "cryptofont/css/cryptofont.css";

export default function Stocks() {

  return (
    <>
      <DashboardNavbar />
      <Sidebar />

      <div className="main main-app p-3 p-lg-4">
        <Row className="g-3">
          <Col md="12" xl="12">
            <TickersList />
          </Col>
        </Row>

        {/* <Footer /> */}
      </div>
    </>
  );
}

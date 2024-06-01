import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const DashboardNumbers = () => {
  return (
    <>
      <Card className="card-one">
        <Card.Body className="p-3 p-xl-4">
          <Row className="justify-content-center g-3 mb-2 mb-xl-4">
            <Col xs="6" sm="4" md>
              <div className="finance-item">
                <div className="finance-item-circle">
                  <h1>4.7B</h1>
                  <label>Total Income</label>
                </div>
              </div>
            </Col>
            <Col xs="6" sm="4" md>
              <div className="finance-item">
                <div className="finance-item-circle">
                  <h1>60M</h1>
                  <label>Total Expenses</label>
                </div>
              </div>
            </Col>
            <Col xs="6" sm="4" md>
              <div className="finance-item">
                <div className="finance-item-circle bg-gray-400">
                  <h1>2.1B</h1>
                  <label>Net Profit</label>
                </div>
              </div>
            </Col>
            <Col xs="6" sm="4" md>
              <div className="finance-item">
                <div className="finance-item-circle">
                  <h1>18.2%</h1>
                  <label>Quick Ratio</label>
                </div>
              </div>
            </Col>
            <Col xs="6" sm="4" md>
              <div className="finance-item">
                <div className="finance-item-circle">
                  <h1>6.8%</h1>
                  <label>Current Ratio</label>
                </div>
              </div>
            </Col>
          </Row>

          <Row className="g-4 g-lg-5 pt-3">
            <Col sm="6" xl="3">
              <div className="d-flex">
                <i className="ri-wallet-2-line fs-32 lh-1 me-3"></i>
                <div>
                  <h6 className="fw-semibold text-dark mb-2">
                    Accounts Receivable
                  </h6>
                  <p className="fs-sm text-secondary mb-0">
                    The proceeds or payment which the company will receive from
                    its customers.
                  </p>
                </div>
              </div>
            </Col>
            <Col sm="6" xl="3">
              <div className="d-flex">
                <i className="ri-refund-2-line fs-32 lh-1 me-3"></i>
                <div>
                  <h6 className="fw-semibold text-dark mb-2">
                    Accounts Payable
                  </h6>
                  <p className="fs-sm text-secondary mb-0">
                    Money owed by a business to its suppliers shown as a
                    liability.
                  </p>
                </div>
              </div>
            </Col>
            <Col sm="6" xl="3">
              <div className="d-flex">
                <i className="ri-exchange-line fs-32 lh-1 me-3"></i>
                <div>
                  <h6 className="fw-semibold text-dark mb-2">Quick Ratio</h6>
                  <p className="fs-sm text-secondary mb-0">
                    Measures the ability of a company to use its near cash or
                    quick assets.
                  </p>
                </div>
              </div>
            </Col>
            <Col sm="6" xl="3">
              <div className="d-flex">
                <i className="ri-exchange-dollar-line fs-32 lh-1 me-3"></i>
                <div>
                  <h6 className="fw-semibold text-dark mb-2">Current Ratio</h6>
                  <p className="fs-sm text-secondary mb-0">
                    Measures whether a firm has enough resources to meet its
                    short-term obligations.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default DashboardNumbers;

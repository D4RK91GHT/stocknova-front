import React from "react";
import { Link } from "react-router-dom";

const PotentialArea = () => {
  return (
    <>
      {/*=================== service area five start ===================*/}
      <div className="service-area bg-gray bg-relative pd-top-120 pd-bottom-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center">
                <h6 className="sub-title-sky-blue">Potential</h6>
                <h2 className="title">
                  Stock Nova's Potential Working Features
                </h2>
              </div>
            </div>
          </div>
          <div className="row custom-no-gutter">
            <div className="col-lg-4 col-md-6">
              <div className="single-service-inner-3 single-service-inner-3-left">
                <div className="thumb">
                  <div className="thumb-inner">
                    <img src="assets/img/service-icon/7.svg" alt="img" />
                  </div>
                </div>
                <div className="details">
                  <h5 className="mb-3">
                    <Link to="/service-details">Accurate Predictions</Link>
                  </h5>
                  <p className="mb-0">
                    Python's Prophet library ensures precise stock forecasts by
                    analyzing historical data efficiently.
                  </p>
                </div>
              </div>
              <div className="single-service-inner-3 single-service-inner-3-left">
                <div className="thumb">
                  <div className="thumb-inner">
                    <img src="assets/img/service-icon/8.svg" alt="img" />
                  </div>
                </div>
                <div className="details">
                  <h5 className="mb-3">
                    <Link to="/service-details">Real-Time Data</Link>
                  </h5>
                  <p className="mb-0">
                    Yahoo Finance integration provides up-to-date market trends
                    and news for informed decisions instantly.
                  </p>
                </div>
              </div>
              <div className="single-service-inner-3 single-service-inner-3-left mb-0">
                <div className="thumb">
                  <div className="thumb-inner">
                    <img src="assets/img/service-icon/9.svg" alt="img" />
                  </div>
                </div>
                <div className="details">
                  <h5 className="mb-3">
                    <Link to="/service-details">Robust Backend</Link>
                  </h5>
                  <p className="mb-0">
                    Django backend ensures secure, scalable, and efficient data
                    handling with advanced features.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 bg-blue-right d-lg-inline-block d-none">
              <div className="service-thumb service-middle-section align-self-end">
                <img src="assets/img/about/potential-1.jpg" alt="img" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-service-inner-3 single-service-inner-3-right">
                <div className="thumb">
                  <div className="thumb-inner">
                    <img src="assets/img/service-icon/10.svg" alt="img" />
                  </div>
                </div>
                <div className="details">
                  <h5 className="mb-3">
                    <Link to="/service-details">Interactive UI</Link>
                  </h5>
                  <p className="mb-0">
                    React JS frontend offers dynamic user experience and
                    customizable dashboards for intuitive navigation.
                  </p>
                </div>
              </div>
              <div className="single-service-inner-3 single-service-inner-3-right">
                <div className="thumb">
                  <div className="thumb-inner">
                    <img src="assets/img/service-icon/11.svg" alt="img" />
                  </div>
                </div>
                <div className="details">
                  <h5 className="mb-3">
                    <Link to="/service-details">Automated Analysis</Link>
                  </h5>
                  <p className="mb-0">
                    Python automates data processing and analysis for actionable
                    insights swiftly and accurately.
                  </p>
                </div>
              </div>
              <div className="single-service-inner-3 single-service-inner-3-right mb-0">
                <div className="thumb">
                  <div className="thumb-inner">
                    <img src="assets/img/service-icon/12.svg" alt="img" />
                  </div>
                </div>
                <div className="details">
                  <h5 className="mb-3">
                    <Link to="/service-details">Customizable Alerts</Link>
                  </h5>
                  <p className="mb-0">
                    Stock Nova notifies users of market changes and price
                    movements promptly, enhancing decision-making effectively.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =================== service area end ===================*/}
    </>
  );
};

export default PotentialArea;

import React from "react";

const WorkProcess = () => {
  return (
    <>
      {/*==================== Work Process Two start ====================*/}
      <div className="work-process-area pd-top-120 pd-bottom-90">
        <div className="container">
          <div className="section-title text-center">
            <h6 className="sub-title">OUR SIMPLE PROCESS</h6>
            <h2 className="title">
              Our <span>Working Process</span> to Make You Confident
            </h2>
          </div>
          <div className="row">
            <div className="col-xl-3 col-md-6">
              <div className="single-work-process-inner">
                <div className="thumb mb-3">
                  <img src="assets/img/icon/9.svg" alt="img" />
                </div>
                <div className="details">
                  <p className="process-count">First Step</p>
                  <h5 className="mb-3">Data Collection</h5>
                  <p className="content">
                    Stock Nova gathers real-time market data from Yahoo Finance
                    API, including stock prices, trading volumes, and financial
                    news.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="single-work-process-inner">
                <div className="thumb mb-3">
                  <img src="assets/img/icon/10.svg" alt="img" />
                </div>
                <div className="details">
                  <p className="process-count">Second Step</p>
                  <h5 className="mb-3">Data Preprocessing</h5>
                  <p className="content">
                    Python processes raw data, cleansing and formatting it for
                    analysis. This step ensures consistency and accuracy in the
                    dataset.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="single-work-process-inner">
                <div className="thumb mb-3">
                  <img src="assets/img/icon/11.svg" alt="img" />
                </div>
                <div className="details">
                  <p className="process-count">Third Step</p>
                  <h5 className="mb-3">Prediction Modeling</h5>
                  <p className="content">
                    Utilizing Prophet library, Stock Nova builds predictive
                    models based on historical stock data. These models forecast
                    future price movements.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="single-work-process-inner">
                <div className="thumb mb-3">
                  <img src="assets/img/icon/12.svg" alt="img" />
                </div>
                <div className="details">
                  <p className="process-count">Final Step</p>
                  <h5 className="mb-3">User Interaction</h5>
                  <p className="content">
                    React JS facilitates a user-friendly interface, allowing
                    users to input preferences, view predictions, and receive
                    alerts for informed investment decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ==================== Work Process Two end ====================*/}
    </>
  );
};

export default WorkProcess;

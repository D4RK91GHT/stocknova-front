import React from "react";
import { Link } from "react-router-dom";
const FaqArea = () => {
  return (
    <>
      {/*==================== Faq area start ====================*/}
      <div
        className="faq-area faq-area-margin-top bg-cover pd-top-90 pd-bottom-110"
        style={{ backgroundImage: 'url("./assets/img/bg/3.png")' }}
      >
        <div className="container">
          <div className="row pd-top-120">
            <div
              className="col-12"
              data-aos="fade-right"
              data-aos-delay="100"
              data-aos-duration="1500"
            >
              <div className="section-title mb-0 mt-4 mt-lg-0">
                <h6 className="sub-title">SOME FAQ'S</h6>
                <h2 className="title">Get Answers to Your Questions</h2>
                <p className="content">
                  We've compiled a list of frequently asked questions (FAQs) to
                  help you get started. If you can't find what you're looking
                  for here, don't hesitate to{" "}
                  <Link to="/logout">Contact Us</Link>.
                </p>
              </div>
              <div
                className="accordion accordion-inner style-2 accordion-icon-left mt-3"
                id="accordionExample"
              >
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      How does Stock Nova predict stock prices?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Stock Nova uses (prophet library, privided by Meta)
                      advanced machine learning algorithms and historical data
                      (yahoo-finance) to analyze trends and patterns in the
                      stock market. By leveraging these technologies, the app
                      provides accurate and reliable stock price predictions to
                      help you make informed investment decisions.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Is Stock Nova suitable for beginners?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Yes, Stock Nova is designed for both beginners and
                      experienced investors. The user-friendly interface and
                      detailed insights make it easy for anyone to navigate and
                      understand stock predictions, regardless of their level of
                      expertise.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      How often are stock price predictions updated?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Stock price predictions are updated in real-time, ensuring
                      you have the most current information at your fingertips.
                      This allows you to respond promptly to market changes and
                      make timely investment decisions.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFour">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      How often are stock price predictions updated?
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Stock price predictions are updated in real-time, ensuring
                      you have the most current information at your fingertips.
                      This allows you to respond promptly to market changes and
                      make timely investment decisions.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ==================== Faq area end ====================*/}
    </>
  );
};

export default FaqArea;

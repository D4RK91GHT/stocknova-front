import React from "react";
import { FaCheckCircle, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutArea = () => {
  return (
    <>
      {/* =============== About Area Two End ===============*/}
      <div className='about-area pd-top-120 pd-bottom-120'>
        <div className='container'>
          <div className='row'>
            <div
              className='col-lg-6 mb-4 mb-lg-0 '
              data-aos='fade-right'
              data-aos-delay='100'
              data-aos-duration='1500'
            >
              <div className='about-thumb-inner'>
                <img
                  className='main-img'
                  src='assets/img/about/10.png'
                  alt='img'
                />
              </div>
            </div>
            <div
              className='col-lg-6 '
              data-aos='fade-left'
              data-aos-delay='100'
              data-aos-duration='1500'
            >
              <div className='section-title mb-0'>
                <h6 className='sub-title'>ABOUT US</h6>
                <h2 className='title'>
                  Empowering Investor's Journey
                </h2>
                <p className='content mb-4'>
                At the intersection of technology and finance, Stock Nova was founded with a mission to revolutionize the way investors approach the stock market. Our innovative application leverages advanced machine learning algorithms and vast historical data to provide precise and reliable stock price predictions.
                </p>
                <div className='row'>
                  <div className='col-md-6'>
                    <ul className='single-list-inner style-check style-heading style-check mb-3'>
                      <li>
                        <FaCheckCircle /> Advanced ML Algorithms
                      </li>
                      <li>
                        <FaCheckCircle /> User-Friendly Interface
                      </li>
                    </ul>
                  </div>
                  <div className='col-md-6'>
                    <ul className='single-list-inner style-check style-heading style-check mb-3'>
                      <li>
                        <FaCheckCircle /> Real-Time Updates
                      </li>
                      <li>
                        <FaCheckCircle /> Robust Security
                      </li>
                    </ul>
                  </div>
                </div>
                <p className='content'>
                At Stock Nova, we prioritize your privacy and data security. We employ state-of-the-art encryption and adhere to the highest standards of security protocols to protect your personal and financial information.
                </p>
                <Link className='btn login-btn btn-border-base' to='/about'>
                  Know More <FaPlus />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* =============== About Area Two End ===============*/}
    </>
  );
};

export default AboutArea;

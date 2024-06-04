import React from "react";
import { Link } from "react-router-dom";

const ServiceArea = () => {
  return (
    <>
      {/*=================== service area start ===================*/}
      <div className='service-area bg-gray bg-relative pd-top-120 pd-bottom-90'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-6'>
              <div className='section-title text-center'>
                <h2 className='title'>
                  Key Features of <span>Stock Nova</span>
                </h2>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-4 col-md-6'>
              <div className='single-service-inner-2 text-center'>
                <div className='thumb'>
                  <img src='assets/img/service/4.png' alt='img' />
                </div>
                <div className='details'>
                  <div className='icon mb-3'>
                    <img src='assets/img/service/8.png' alt='img' />
                  </div>
                  <h5>
                    <Link to='/service-details'>Realtime Data</Link>
                  </h5>
                  <p>User Don't Need to worry about the Realtime data, we have integrated Yahoo Finance packageto get the realtime data.</p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-service-inner-2 text-center'>
                <div className='thumb'>
                  <img src='assets/img/service/5.png' alt='img' />
                </div>
                <div className='details'>
                  <div className='icon mb-3'>
                    <img src='assets/img/service/9.png' alt='img' />
                  </div>
                  <h5>
                    <Link to='/service-details'>Latest Technology</Link>
                  </h5>
                  <p>We have been used one of most used and latest technology Python's Django, to ensure more rerliable and secure.</p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-service-inner-2 text-center'>
                <div className='thumb'>
                  <img src='assets/img/service/6.png' alt='img' />
                </div>
                <div className='details'>
                  <div className='icon mb-3'>
                    <img src='assets/img/service/10.png' alt='img' />
                  </div>
                  <h5>
                    <Link to='/service-details'>Attractive UI/UX</Link>
                  </h5>
                  <p>React JS Components Based Designe and SaaS for designe make this application this much attractive and beautiful.</p>
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

export default ServiceArea;

import React from "react";
import { FaAngleLeft, FaAngleRight, FaStar } from "react-icons/fa";
import Slider from "react-slick";
const Testimonial = () => {
  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return <FaAngleRight className={className} onClick={onClick} />;
  }
  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return <FaAngleLeft className={className} onClick={onClick} />;
  }
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <>
      {/* =================== Testimonial One Start ===================*/}
      <div
        className="testimonial-area pd-top-120 pd-bottom-90"
        style={{ backgroundImage: 'url("./assets/img/bg/11.png")' }}
      >
        <div className="container">
          <div className="section-title">
            <h6 className="sub-title">TESTIMONIAL</h6>
            <h2 className="title">What Stock Nova User Says</h2>
          </div>
          <div className="testimonial-slider-1  slider-control-round slider-control-dots slider-control-right-top">
            <Slider {...settings}>
              <div className="item">
                <div className="single-testimonial-inner style-1 text-center">
                  <h5>Priya Sharma</h5>
                  <p className="designation mb-3">Beginner Investor</p>
                  <div className="icon mb-2">
                    <img src="assets/img/icon/25.png" alt="img" />
                  </div>
                  <p>
                    As a beginner in the stock market, Stock Nova has been a
                    game-changer for me. Its user-friendly interface and
                    insightful predictions have helped me navigate the
                    complexities of investing with confidence.
                  </p>
                  <div className="ratting-inner mt-4">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="single-testimonial-inner style-1 text-center">
                  <h5>Vikram Singh</h5>
                  <p className="designation mb-3">Experienced Trader</p>
                  <div className="icon mb-2">
                    <img src="assets/img/icon/25.png" alt="img" />
                  </div>
                  <p>
                    I've been using Stock Nova for a while now, and I'm
                    impressed by its accuracy and reliability. It's become an
                    indispensable tool in my investment strategy.
                  </p>
                  <div className="ratting-inner mt-4">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="single-testimonial-inner style-1 text-center">
                  <h5>Neha Patel</h5>
                  <p className="designation mb-3">Financial Advisor</p>
                  <div className="icon mb-2">
                    <img src="assets/img/icon/25.png" alt="img" />
                  </div>
                  <p>
                    Stock Nova's customizable alerts have been incredibly
                    helpful in keeping me informed about market changes. It's
                    like having a personal investment advisor in my pocket
                  </p>
                  <div className="ratting-inner mt-4">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="single-testimonial-inner style-1 text-center">
                  <h5>Rajesh Gupta</h5>
                  <p className="designation mb-3">Financial Analyst</p>
                  <div className="icon mb-2">
                    <img src="assets/img/icon/25.png" alt="img" />
                  </div>
                  <p>
                    Stock Nova has transformed my approach to investing. Its
                    accurate predictions and real-time updates have
                    significantly improved my portfolio performance.
                  </p>
                  <div className="ratting-inner mt-4">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
      {/* =================== Testimonial One End ===================*/}
    </>
  );
};

export default Testimonial;

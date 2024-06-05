import React from "react";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const FooterOne = () => {
  return (
    <>
      {/* ================== Footer One Start ==================*/}
      <footer className='footer-area bg-black bg-cover'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 col-md-6'>
              <div className='widget widget_about'>
                <div className='thumb'>
                  <img src='assets/img/stocknova.png' alt='img' />
                </div>
                <div className='details'>
                  <p>
                    Where Data Meets Destiny
                  </p>
                  <p className='mt-3'>
                    <FaPhoneAlt /> (+91) 7699753019
                  </p>
                  <p className='mt-2'>
                    <FaEnvelope /> (+91) 7318984157
                  </p>
                  <ul className='social-media'>
                    <li>
                      <a href='#'>
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <FaInstagram />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <FaYoutube />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='widget widget_nav_menu'>
                <h4 className='widget-title'>Links</h4>
                <ul>
                  <li>
                    <Link to='/'>
                      <FaArrowRight /> Stock List
                    </Link>
                  </li>
                  <li>
                    <Link to='/'>
                      <FaArrowRight /> NSE
                    </Link>
                  </li>
                  <li>
                    <Link to='/'>
                      <FaArrowRight /> BSE{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to='/service'>
                      <FaArrowRight /> SEBI
                    </Link>
                  </li>
                  <li>
                    <Link to='/service'>
                      <FaArrowRight /> Meet Advisor
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='widget widget_nav_menu'>
                <h4 className='widget-title'>Important</h4>
                <ul>
                  <li>
                    <Link to='/'>
                      <FaArrowRight /> Inversor Comunity
                    </Link>
                  </li>
                  <li>
                    <Link to='/service'>
                      <FaArrowRight /> Finance Creator
                    </Link>
                  </li>
                  <li>
                    <Link to='/'>
                      <FaArrowRight /> About Us
                    </Link>
                  </li>
                  <li>
                    <Link to='/'>
                      <FaArrowRight /> Contact Us{" "}
                    </Link>
                  </li>
                  
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='footer-bottom'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6 align-self-center'>
                <p>Stock Nova 2024 | All Rights Reserved</p>
              </div>
              <div className='col-md-6 text-lg-end'>
                <a href='#'>Trams &amp; Condition</a>
                <a href='#'>Privacy Policy</a>
                <a href='#'>Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* ================== Footer One  end ==================*/}
    </>
  );
};

export default FooterOne;

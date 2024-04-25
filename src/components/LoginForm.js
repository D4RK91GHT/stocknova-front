import React from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <>
      {/* ========================= contact Area One start =========================*/}
      <div className="login-area">
        <div className="container">
          <div className="login-section">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="sub-login-section mb-0">
                  <h6 className="sub-title">WELCOME BACK</h6>
                  <h2 className="title">
                    Bringing Your <span>Vision</span> To Life
                  </h2>
                  <form className="mt-4">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="single-input-inner style-border">
                          <input type="text" placeholder="Your Email" />
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="single-input-inner style-border">
                          <input type="password" placeholder="Password" />
                        </div>
                      </div>

                      <div className="col-12 mb-3">
                        <button
                          className="btn btn-black mt-0 w-100 border-radius-5"
                          href="#"
                        >
                          Login
                        </button>
                      </div>
                      <div className="text-center">
                        <Link className="mt-5" to="/register">
                          New Here ? Register Now
                        </Link>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*========================= contact-inner One end =========================*/}
    </>
  );
};

export default LoginForm;

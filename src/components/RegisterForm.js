import React from "react";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  return (
    <>
      {/* ========================= contact Area One start =========================*/}
      <div className="login-area">
        <div className="container">
          <div className="login-section">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="sub-login-section mb-0">
                  <h6 className="sub-title">GLAD TO SEE YOU</h6>
                  <h2 className="title">
                    Bringing Your <span>Vision</span> To Life
                  </h2>
                  <form className="mt-4">
                    <div className="row">
                      
                      <div className="col-lg-6">
                        <div className="single-input-inner style-border">
                          <input type="text" placeholder="Fisrt Name" />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="single-input-inner style-border">
                          <input type="text" placeholder="Last Name" />
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="single-input-inner style-border">
                          <input type="mail" placeholder="Your Email" />
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="single-input-inner style-border">
                          <input type="password" placeholder="Password" />
                        </div>
                      </div>

                      <div className="col-12 mb-3">
                        <button
                          className="sn-btn mt-0 w-100 border-radius-5"
                          href="#"
                        >
                          Register
                        </button>
                      </div>
                      <div className="text-center">
                        <Link className="mt-5" to="/login">
                          Already Registered? Login Here
                        </Link>
                      </div>
                      <div className="text-center py-2">
                        <Link className="text-black" to="/">
                          Go Back
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

export default RegisterForm;

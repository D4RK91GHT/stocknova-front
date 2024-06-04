import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);

      const response = await axios.post(
        "http://127.0.0.1:8000/login/",
        formData
      );
      if (response.status === 200) {
        console.log(response);
        if (response.data.status === true) {
          navigate("/dashboard");
        } else {
          setError(response.data.message);
        }
      } else {
        if (response.data.status === false) {
          setError(response.data.message);
        }
      }
    } catch (err) {
      setError("Error:", JSON.stringify(error));
      console.error("Error:", JSON.stringify(error));
    }
  };

  return (
    <>
      {/* ========================= contact Area One start =========================*/}
      <div className="login-area">
        <div className="container">
          <div className="login-section">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="sub-login-section mb-0 pt-4">
                <img className="logo mb-2" src="assets/img/stocknova.png" alt="img" />

                  {error && <p className="text-danger">{error}</p>}
                  <form className="mt-4" onSubmit={handleLogin}>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="single-input-inner style-border">
                          <input
                            type="email"
                            placeholder="Your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="single-input-inner style-border">
                          <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-12 mb-3">
                        <button
                          type="submit"
                          className="sn-btn mt-0 w-100 border-radius-5"
                        >
                          Login
                        </button>
                      </div>
                      <div className="text-center">
                        <Link className="mt-5" to="/register">
                          New Here ? Register Now
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

export default LoginForm;

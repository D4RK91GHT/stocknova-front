import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
import axios from "axios";

const RegisterForm = () => {
  const [error, setError] = useState("");
  const [FName, setFName] = useState("");
  const [LName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("fname", FName);
      formData.append("lname", LName);
      formData.append("email", email);
      formData.append("password", password);
      console.log(FName, LName, email, password);

      const response = await axios.post(
        "http://127.0.0.1:8000/register/",
        formData
      );
      if (response.status === 200) {
        if (response.data.status === true) {
          if (response.data.status) {
            navigate("/dashboard");
            // console.log(response.data);
          }
        } else {
          console.log(response.data.error);
          setError(response.data.error);
        }
      } else {
        if (response.data.status === false) {
          setError(response.data.message);
        } else {
          console.log(response.data);
          setError(response.data.message);
        }
      }
    } catch (err) {
      setError("Error:", JSON.stringify(err));
      console.error("Error:", JSON.stringify(err));
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

                  {error ? <Alert variant="warning">{error}</Alert> : ""}
                  <form className="mt-4" onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="single-input-inner style-border">
                          <input
                            type="text"
                            placeholder="First Name"
                            name="firstName"
                            value={FName}
                            onChange={(e) => setFName(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="single-input-inner style-border">
                          <input
                            type="text"
                            placeholder="Last Name"
                            name="lastName"
                            value={LName}
                            onChange={(e) => setLName(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="single-input-inner style-border">
                          <input
                            type="email"
                            placeholder="Your Email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="single-input-inner style-border">
                          <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="single-input-inner style-border">
                          <input
                            type="password"
                            placeholder="Confirm Password"
                            name="cpassword"
                            value={cpassword}
                            onChange={(e) => setCPassword(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="col-12 mb-3">
                        <button
                          className="sn-btn mt-0 w-100 border-radius-5"
                          type="submit"
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

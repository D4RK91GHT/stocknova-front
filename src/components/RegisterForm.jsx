// import React from "react";
// import { Link } from "react-router-dom";

// const RegisterForm = () => {
//   return (
//     <>
//       {/* ========================= contact Area One start =========================*/}
//       <div className="login-area">
//         <div className="container">
//           <div className="login-section">
//             <div className="row justify-content-center">
//               <div className="col-lg-6">
//                 <div className="sub-login-section mb-0">
//                   <h6 className="sub-title">GLAD TO SEE YOU</h6>
//                   <h2 className="title">
//                     Bringing Your <span>Vision</span> To Life
//                   </h2>
//                   <form className="mt-4">
//                     <div className="row">
                      
//                       <div className="col-lg-6">
//                         <div className="single-input-inner style-border">
//                           <input type="text" placeholder="Fisrt Name" />
//                         </div>
//                       </div>

//                       <div className="col-lg-6">
//                         <div className="single-input-inner style-border">
//                           <input type="text" placeholder="Last Name" />
//                         </div>
//                       </div>

//                       <div className="col-lg-12">
//                         <div className="single-input-inner style-border">
//                           <input type="mail" placeholder="Your Email" />
//                         </div>
//                       </div>

//                       <div className="col-lg-12">
//                         <div className="single-input-inner style-border">
//                           <input type="password" placeholder="Password" />
//                         </div>
//                       </div>

//                       <div className="col-12 mb-3">
//                         <button
//                           className="sn-btn mt-0 w-100 border-radius-5"
//                           href="#"
//                         >
//                           Register
//                         </button>
//                       </div>
//                       <div className="text-center">
//                         <Link className="mt-5" to="/login">
//                           Already Registered? Login Here
//                         </Link>
//                       </div>
//                       <div className="text-center py-2">
//                         <Link className="text-black" to="/">
//                           Go Back
//                         </Link>
//                       </div>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/*========================= contact-inner One end =========================*/}
//     </>
//   );
// };

// export default RegisterForm;


import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterForm = () => {
  const [error, setError] = useState("");
  const [FName, setFName] = useState("");
  const [LName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("email", FName);
      formData.append("email", LName);
      formData.append("email", email);
      formData.append("password", password);

      const response = await axios.post(
        "http://127.0.0.1:8000/register/",
        formData
      );
      if (response.status === 200) {
        console.log(response);
        if (response.data.status === true) {
          // navigate("/dashboard");
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
    // const { email, password } = formData;

    // let data = new FormData();
    // data.append('email', email);
    // data.append('password', password);

    // let config = {
    //   method: 'post',
    //   maxBodyLength: Infinity,
    //   url: 'http://127.0.0.1:8000/register/',
    //   headers: { 
    //     ...data.getHeaders()
    //   },
    //   data : data
    // };

    // axios.request(config)
    //   .then((response) => {
    //     console.log(JSON.stringify(response.data));
    //     // You can handle success here, e.g., redirect to another page or show a success message
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //     // You can handle error here, e.g., show an error message
    //   });
  };

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

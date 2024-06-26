import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Logout from "./pages/Logout";

import Register from "./pages/Register";

import Dashboard from "./pages/Dashboard";
import Stocks from "./pages/Stocks";
import Predection from "./pages/Predection";
import BackTest from "./pages/BackTest";



import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ScrollToTop from "react-scroll-to-top";
function App() {
  useEffect(() => {
    AOS.init({
      offset: 0,
      easing: "ease",
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/logout' element={<Logout />} />

        <Route exact path='/about' element={<About />} />
        <Route exact path='/contact' element={<Contact />} />

        <Route exact path='/dashboard' element={<Dashboard />} />
        <Route exact path='/stocks' element={<Stocks />} />
        <Route exact path='/predict/:symbol' element={<Predection />} />
        <Route exact path='/back-test/' element={<BackTest />} />


      </Routes>
      <ScrollToTop smooth color='#246BFD' />
    </BrowserRouter>
  );
}

export default App;

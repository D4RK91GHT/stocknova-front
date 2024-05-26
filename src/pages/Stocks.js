import React, { useEffect, useState } from "react";
import DashboardNavbar from "../components/DashboardNavbar";
import Sidebar from "../components/Sidebar";
import StockCards from "../components/StockCards";
import TickersList from "../components/TickersList";

import { Row, Col} from "react-bootstrap";

import "cryptofont/css/cryptofont.css";

export default function Stocks() {
  const currentSkin = localStorage.getItem("skin-mode") ? "dark" : "";
  const [skin, setSkin] = useState(currentSkin);

  const switchSkin = (skin) => {
    if (skin === "dark") {
      const btnWhite = document.getElementsByClassName("btn-white");

      for (const btn of btnWhite) {
        btn.classList.add("btn-outline-primary");
        btn.classList.remove("btn-white");
      }
    } else {
      const btnOutlinePrimary = document.getElementsByClassName(
        "btn-outline-primary"
      );

      for (const btn of btnOutlinePrimary) {
        btn.classList.remove("btn-outline-primary");
        btn.classList.add("btn-white");
      }
    }
  };

  switchSkin(skin);

  useEffect(() => {
    switchSkin(skin);
  }, [skin]);

  return (
    <>
      <DashboardNavbar onSkin={setSkin} />
      <Sidebar />

      <div className="main main-app p-3 p-lg-4">
        <Row className="g-3">
          <StockCards />

          <Col md="12" xl="12">
            <TickersList />
          </Col>
        </Row>

        {/* <Footer /> */}
      </div>
    </>
  );
}

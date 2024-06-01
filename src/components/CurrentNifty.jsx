import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactApexChart from "react-apexcharts";
// import  from "react-bootstrap/Spinner";
import { Col, Row,Spinner } from "react-bootstrap";

const CurrentNifty = () => {
  const CURRENCYSYMBOL = "₹";
  const [niftyData, setNiftyData] = useState(null);
  const [niftyInfo, setNiftyInfo] = useState(null);

  const [loaded, setLoaded] = useState(false);

  const getCurrentData = async () => {
    const formData = new FormData();
    formData.append("symbol", `^NSEI`);
    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/current/`,
        formData
      );
      setNiftyInfo(response.data.res.info);
      console.log(response.data.res.info);

      setNiftyData(response.data.res);
      setLoaded(true); // Set loaded to true after data is fetched
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  useEffect(() => {
    getCurrentData();
    // Set up an interval to refresh data every 5 minutes (300000 ms)
    const intervalId = setInterval(getCurrentData, 300000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      
      {!loaded ? (
        <div className="w-100 py-5 text-center">
          <Spinner animation="grow" />
        </div>
      ) : niftyData && niftyData.market.series ? (
        <div className="finance-info p-3 pb-0 p-xl-4 pb-xl-0">
        <label className="fs-sm fw-medium mb-2 mb-xl-1">Current {niftyInfo.longName}</label>
        <h1 className="finance-value">
          <span>{CURRENCYSYMBOL}</span>{niftyInfo.previousClose} <span>{niftyInfo.currency}</span>
        </h1>

        <h4 className="finance-subvalue mb-3 mb-md-2">
          <span className="text-primary small">{CURRENCYSYMBOL}{niftyInfo.open}</span>
          <small>Opening Price</small>
        </h4>

        <Row className="row-cols-auto g-3 g-xl-4 pt-2">
          {[
            {
              amount: niftyInfo.fiftyDayAverage,
              text: "Fifty Day Average",
              percent: "2.3",
              status: "success",
            },
            {
              amount: niftyInfo.twoHundredDayAverage,
              text: "Two Hundred Day Average",
              percent: "6.8",
              status: "success",
            },
          ].map((item, index) => (
            <Col key={index}>
              <h6 className="card-value fs-15 mb-1">{CURRENCYSYMBOL}{item.amount} {niftyInfo.currency}</h6>
              <span className="fs-sm fw-medium text-secondary d-block mb-1">
                {item.text}
              </span>
            </Col>
          ))}
        </Row>
      </div>
      ) : (
        <div>No data available</div>
      )}
      {!loaded ? (
        <div className="w-100 py-5 text-center">
          <Spinner animation="grow" />
        </div>
      ) : niftyData && niftyData.market.series ? (
        <ReactApexChart
          options={niftyData.market}
          series={niftyData.market.series}
          type="area"
          height={430}
          className="apex-chart-two"
        />
      ) : (
        <div>No data available</div>
      )}
    </>
  );
};

export default CurrentNifty;

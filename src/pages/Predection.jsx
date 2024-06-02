import React, { useEffect, useState, useCallback } from "react";
import { Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";

import DashboardNavbar from "../components/DashboardNavbar";
import Sidebar from "../components/Sidebar";
import PreviousDataTable from "../components/PreviousDataTable";
import PreviousTimeSeries from "../components/PreviousTimeSeries";
import PredictedTable from "../components/PredictedTable";
import PredictedGraph from "../components/PredictedGraph";
import PredectedComponents from "../components/PredectedComponents";

import "cryptofont/css/cryptofont.css";

const Prediction = () => {
  const { symbol } = useParams(); // Get the dynamic symbol from the URL
  const [period, setPeriod] = useState("90");
  const [previousData, setPreviousData] = useState([]);
  const [oldTimeSeries, setOldTimeSeries] = useState([]);
  const [predictedTable, setPredictedTable] = useState([]);
  const [predictedGraph, setPredictedGraph] = useState([]);
  const [predictedComponents, setPredictedComponents] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  const fetchData = useCallback(async (currentSymbol, currentPeriod) => {
    const controller = new AbortController();
    const signal = controller.signal;

    const formData = new FormData();
    formData.append("symbol", `${currentSymbol}.NS`);
    formData.append("period", currentPeriod);

    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/showdata/`,
        formData,
        { signal }
      );

      setPreviousData(response.data.data);
      setOldTimeSeries(JSON.parse(response.data.timeSeries));
      setPredictedTable(response.data.predictedData);
      setPredictedGraph(JSON.parse(response.data.predictedGraph));
      setPredictedComponents(response.data.predictedComponents);
      setLoading(false); // Set loading to false after data is fetched
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log("Request canceled", error.message);
      } else {
        console.error("Error fetching predictions:", error);
      }
    }

    // Cleanup function to cancel the request if the component unmounts
    return () => {
      controller.abort();
    };
  }, []);

  useEffect(() => {
    setLoading(true);
    fetchData(symbol, period);
  }, [symbol, period, fetchData]);

  const ChangePredectionPeriod = (event) => {
    const selectedPeriod = event.target.value;
    setPeriod(selectedPeriod);
    setLoading(true);
    fetchData(symbol, selectedPeriod); // Call fetchData with the new period
  };

  return (
    <>
      <DashboardNavbar />
      <Sidebar />
      <div className="main main-app p-3 p-lg-4">
        <div className="d-flex flex-column-reverse flex-lg-row justify-content-between">
          <h2 className="text-center text-lg-start w-100">
            {symbol} for {period} Days
          </h2>

          <Form.Select
            className="w-auto ms-auto mb-3 mb-lg-0"
            onChange={ChangePredectionPeriod}
            defaultValue="90"
          >
            <option value="" disabled>
              Select Time Range
            </option>
            <option value="30">One Month</option>
            <option value="60">Two Months</option>
            <option value="90">Three Months</option>
            <option value="181">Six Months</option>
          </Form.Select>
        </div>
        <div className="d-flex justify-content-center">
          {loading ? (
            <div className="w-100 py-5 text-center">
              <Spinner animation="grow" />
            </div>
          ) : previousData ? (
            <div className="w-100">
              <PreviousDataTable data={previousData} />
            </div>
          ) : (
            <div>No data available</div>
          )}
        </div>

        <div className="d-flex justify-content-center">
          {loading ? (
            <div className="w-100 py-5 text-center">
              <Spinner animation="grow" />
            </div>
          ) : previousData ? (
            <div className="w-100 overflow-auto">
              <PreviousTimeSeries seriesData={oldTimeSeries} />
            </div>
          ) : (
            <div>No data available</div>
          )}
        </div>

        <div className="d-flex justify-content-center">
          {loading ? (
            <div className="w-100 py-5 text-center">
              <Spinner animation="grow" />
            </div>
          ) : previousData ? (
            <div className="w-100">
              <PredictedTable predictedTableData={predictedTable} />
            </div>
          ) : (
            <div>No data available</div>
          )}
        </div>

        <div className="d-flex justify-content-center">
          {loading ? (
            <div className="w-100 py-5 text-center">
              <Spinner animation="grow" />
            </div>
          ) : previousData ? (
            <div className="w-100">
              <PredictedGraph predictedGraphData={predictedGraph} />
            </div>
          ) : (
            <div>No data available</div>
          )}
        </div>

        <div className="d-flex justify-content-center">
          {loading ? (
            <div className="w-100 py-5 text-center">
              <Spinner animation="grow" />
            </div>
          ) : previousData ? (
            <div className="w-100">
              <PredectedComponents componentsData={predictedComponents} />
            </div>
          ) : (
            <div>No data available</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Prediction;

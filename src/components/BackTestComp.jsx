import React, { useEffect, useState, useCallback } from "react";
import { Form } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";

import PreviousDataTable from "../components/PreviousDataTable";
import PreviousTimeSeries from "../components/PreviousTimeSeries";
import PredictedTable from "../components/PredictedTable";
import PredictedGraph from "../components/PredictedGraph";

const BackTestComp = ({ ticker }) => {
  const [dataFrom, setDataFromDate] = useState();
  const [dataUpto, setDataUptoDate] = useState();
  const [period, setPeriod] = useState("90");

  const [previousData, setPreviousData] = useState([]);
  const [oldTimeSeries, setOldTimeSeries] = useState([]);
  const [predictedTable, setPredictedTable] = useState([]);
  const [predictedGraph, setPredictedGraph] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  const fetchData = useCallback(
    async (currentSymbol, dataFromDate, dataUptoDate, currentPeriod) => {
      console.log(currentSymbol, dataFromDate, dataUptoDate, currentPeriod);
      const controller = new AbortController();
      const signal = controller.signal;

      const formData = new FormData();
      formData.append("symbol", `${currentSymbol}.NS`);
      formData.append("start-date", dataFromDate);
      formData.append("end-date", dataUptoDate);
      formData.append("period", currentPeriod);

      try {
        const response = await axios.post(
          `http://127.0.0.1:8000/back-test/`,
          formData,
          { signal }
        );

        setPreviousData(response.data.data);
        setOldTimeSeries(JSON.parse(response.data.timeSeries));
        setPredictedTable(response.data.predictedData);
        setPredictedGraph(JSON.parse(response.data.predictedGraph));
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
    },
    []
  );

  useEffect(() => {
    setLoading(true);
    fetchData(ticker, dataFrom, dataUpto, period);
  }, [ticker, dataFrom, dataUpto, period, fetchData]);

  const ChangePredectionPeriod = (event) => {
    const selectedPeriod = event.target.value;
    setPeriod(selectedPeriod);
    setLoading(true);
    fetchData(ticker, selectedPeriod); // Call fetchData with the new period
  };

  return (
    <>
      <div className="d-flex flex-column flex-md-row justify-content-end">
        <div className="mx-2">
          <Form.Label htmlFor="exampleColorInput">Select Data From</Form.Label>
          <Form.Control
            type="date"
            onChange={(e) => setDataFromDate(e.target.value)}
            id=""
            title="Select date from which date you want to select data"
          />
        </div>
        <div className="mx-2">
          <Form.Label htmlFor="exampleColorInput">Select Data Upto</Form.Label>
          <Form.Control
            type="date"
            onChange={(e) => setDataUptoDate(e.target.value)}
            id=""
            title="Select date upto which date you want to select data"
          />
        </div>
        <div className="mx-2">
          <Form.Label htmlFor="exampleColorInput">Select Period</Form.Label>
          <Form.Select onChange={ChangePredectionPeriod} defaultValue="90">
            <option value="" disabled>
              Select Time Range
            </option>
            <option value="30">One Month</option>
            <option value="60">Two Months</option>
            <option value="90">Three Months</option>
            <option value="181">Six Months</option>
          </Form.Select>
        </div>
      </div>
      {loading ? (
        <div className="w-100 py-5 text-center">
          <Spinner animation="grow" />
          <p>Please Select a stock and period with Date Range to Test</p>
        </div>
      ) : previousData ? (
        <div className="">
          <div className="w-100">
            <PreviousDataTable
              data={previousData}
              heading={"Original Price Table"}
            />
          </div>

          <div className="w-100 overflow-auto">
            <PreviousTimeSeries
              seriesData={oldTimeSeries}
              heading={"Original Price Chart"}
            />
          </div>

          <div className="w-100">
            <PredictedTable predictedTableData={predictedTable} />
          </div>

          <div className="w-100">
            <PredictedGraph predictedGraphData={predictedGraph} />
          </div>
        </div>
      ) : (
        <div>No data available</div>
      )}
    </>
  );
};

export default BackTestComp;

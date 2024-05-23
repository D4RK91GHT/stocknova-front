import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
  const [previousData, setPreviousData] = useState([]);
  const [oldTimeSeries, setOldTimeSeries] = useState([]);
  const [predictedTable, setPredictedTable] = useState([]);
  const [predictedGraph, setpredictedGraph] = useState([]);
  const [predictedComponents, setpredictedComponents] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    async function fetchData() {
      const formData = new FormData();
      formData.append("symbol", `${symbol}.NS`);

      try {
        const response = await axios.post(
          `http://127.0.0.1:8000/showdata/`,
          formData
        );
        console.log(response);

        setPreviousData(response.data.data);
        setOldTimeSeries(JSON.parse(response.data.timeSeries));
        setPredictedTable(response.data.predictedData);
        setpredictedGraph(JSON.parse(response.data.predictedGraph));
        setpredictedComponents(response.data.predictedComponents);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching predictions:", error);
      }
    }

    fetchData();
  }, [symbol]);

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
        <h1>Predictions for {symbol}</h1>
        {loading ? (
          <div>Loading...</div>
        ) : previousData ? (
          <div>
            {/* Render your prediction data here */}
            <PreviousDataTable data={previousData} />
            <PreviousTimeSeries seriesData={oldTimeSeries} />
            <PredictedTable predictedTableData={predictedTable} />
            <PredictedGraph predictedGraphData={predictedGraph} />
            <PredectedComponents componentsData={predictedComponents} />
            {/* <p>{JSON.stringify(previousData)}</p> */}
          </div>
        ) : (
          <div>No data available</div>
        )}
      </div>
    </>
  );
};

export default Prediction;

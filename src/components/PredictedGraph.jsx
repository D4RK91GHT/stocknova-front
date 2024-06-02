import React from "react";
import Plot from "react-plotly.js";

const PredictedGraph = ({ predictedGraphData }) => {
  return (
    <div className="mt-2 py-5 bg-white">
    <h3 className="text-center">Predicted Price Chart</h3>
      <Plot
        data={predictedGraphData.data}
        layout={predictedGraphData.layout}
        className="w-100 d-flex justify-content-center"
        />
        </div>
  );
};

export default PredictedGraph;

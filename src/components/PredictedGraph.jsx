import React from "react";
import Plot from "react-plotly.js";

const PredictedGraph = ({predictedGraphData}) => {
  
  return (
    <Plot
      data={predictedGraphData.data}
      layout={predictedGraphData.layout}
      style={{ width: "100%", height: "500px" }}
    />
  );
};

export default PredictedGraph;
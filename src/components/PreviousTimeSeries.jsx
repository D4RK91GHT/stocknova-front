import Plot from "react-plotly.js";

const PreviousTimeSeries = ({ seriesData }) => {
  // let datakeys = Object.keys(seriesData);
  // console.log(datakeys);

  return (
    <Plot
      data={seriesData.data}
      layout={seriesData.layout}
      style={{ width: "100%", height: "500px" }}
    />
  );
};

export default PreviousTimeSeries;

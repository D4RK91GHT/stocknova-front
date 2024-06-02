import Plot from "react-plotly.js";

const PreviousTimeSeries = ({ seriesData }) => {
  // let datakeys = Object.keys(seriesData);
  // console.log(datakeys);

  return (
    <div className="mt-2 py-5 bg-white">
      <h3 className="text-center">Previous Price Chart</h3>
      <Plot
        data={seriesData.data}
        layout={seriesData.layout}
        style={{ width: "100%", height: "500px" }}
      />
    </div>
  );
};

export default PreviousTimeSeries;

import React from "react";

const PredectedComponents = ({ componentsData }) => {
  return (
    <div className="text-center mt-2 py-5 bg-white">
      <h3 className="mb-4">Predicted Components</h3>
      <img
        src={`data:image/png;base64, ${componentsData}`}
        alt="Forecast Components"
      />
    </div>
  );
};
export default PredectedComponents;

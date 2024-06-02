import React from "react";
import { Grid } from "gridjs-react";

const PredictedTable = ({ predictedTableData }) => {
  const excludedKeys = [
    "additive_terms",
    "additive_terms_lower",
    "additive_terms_upper",
    "weekly",
    "weekly_lower",
    "weekly_upper",
    "yearly",
    "yearly_lower",
    "yearly_upper",
    "multiplicative_terms",
    "multiplicative_terms_lower",
    "multiplicative_terms_upper",
  ];
  const excludedValueIndex = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
  const keys = Object.keys(predictedTableData);
  const allKeys = keys.reduce((accumulator, currentValue) => {
    return accumulator.concat(Object.keys(predictedTableData[currentValue]));
  }, []);
  const uniqueKeys = Array.from(new Set(allKeys));

  const formatDate = (inputDateString) => {
    const inputDate = new Date(inputDateString);
    const options = { day: "numeric", month: "long", year: "numeric" };
    return inputDate.toLocaleDateString("en-US", options);
  };

  const formatAmount = (num) => {
    return num.toFixed(2);
  };

  function capitalizeAndFormat(str) {
    let words = str.split(/[_-]/);
    return words
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  const tableData = uniqueKeys.map((uniqueKey) => {
    const rowData = Object.values(predictedTableData)
      .filter((_, idx) => !excludedValueIndex.includes(idx))
      .map((value) => {
        return typeof value[uniqueKey] !== "undefined"
          ? typeof value[uniqueKey] === "number"
            ? formatAmount(value[uniqueKey])
            : formatDate(value[uniqueKey])
          : value;
      });
    return rowData;
  });

  const columns = keys
    .filter((key) => !excludedKeys.includes(key))
    .map((key) => ({
      name: capitalizeAndFormat(key),
    }));

  return (
    <div className="mt-2 py-5 bg-white">
      <h3 className="text-center mb-4">Predicted Price Table</h3>
      <div className="w-75 mx-auto">
        <Grid
          data={tableData}
          columns={columns}
          search={true}
          pagination={{ limit: 10 }}
          className={{ table: "table mb-0 border table-striped" }}
        />
      </div>
    </div>
  );
};

export default PredictedTable;

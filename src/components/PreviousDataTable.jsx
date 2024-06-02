import React from "react";
import { Grid } from "gridjs-react";

const PreviousDataTable = ({ data }) => {
  // Extract keys from the data object
  const keys = Object.keys(data);

  // Get all unique keys
  const allKeys = keys.reduce((accumulator, currentValue) => {
    return accumulator.concat(Object.keys(data[currentValue]));
  }, []);

  // Remove duplicate keys
  const uniqueKeys = Array.from(new Set(allKeys));

  const formatDate = (inputDateString) => {
    const inputDate = new Date(inputDateString);
    const options = { day: "numeric", month: "long", year: "numeric" };
    return inputDate.toLocaleDateString("en-US", options);
  };

  const formatAmount = (num) => {
    return num.toFixed(2);
  };

  const columns = Object.keys(data);

  const gridData = uniqueKeys.map((uniqueKey) => {
    return columns.map((column) => {
      if (column === "Date") return formatDate(data.Date[uniqueKey]);
      if (column === "Volume") return data.Volume[uniqueKey];
      return formatAmount(data[column][uniqueKey]);
    });
  });

  return (
    <div className="table-responsive mt-2 py-5 bg-white">
      <h3 className="text-center mb-4">Previous Price Table</h3>
      <div className="w-75 mx-auto">
        <Grid
          data={gridData}
          columns={columns.map((column) => ({ name: column }))}
          search={true}
          pagination={{
            limit: 10,
          }}
          className={{
            table: "table mb-0",
          }}
        />
      </div>
    </div>
  );
};

export default PreviousDataTable;

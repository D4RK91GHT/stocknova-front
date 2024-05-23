import React from "react";

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
  }

  const formatAmount = (num) => {
    return num.toFixed(2);
  }

  const tstyle = {
    width: "70%",
    margin: "0 auto",
  };
  
  return (
    <div className="table-responsive">
      <table className="table" style={tstyle}>
        <thead>
          <tr>
            {keys.map((key, index) => (
              <th key={index}>{key}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {uniqueKeys.map((uniqueKey, index) => (
            <tr key={index}>
              <td>{formatDate(data.Date[uniqueKey])}</td>
              <td>{formatAmount(data.Open[uniqueKey])}</td>
              <td>{formatAmount(data.High[uniqueKey])}</td>
              <td>{formatAmount(data.Low[uniqueKey])}</td>
              <td>{formatAmount(data.Close[uniqueKey])}</td>
              <td>{formatAmount(data["Adj Close"][uniqueKey])}</td>
              <td>{data.Volume[uniqueKey]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PreviousDataTable;

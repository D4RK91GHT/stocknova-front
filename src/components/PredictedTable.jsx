import React from "react";
const PredictedTable = ({ predictedTableData }) => {
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
    // Split the string by underscore or dash
    let words = str.split(/[_-]/);
    
    // Capitalize each word and join with space
    return words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }


  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            {keys.map((key, index) => (
              <th style={{ padding: "0 5px" }} key={index}>
                {capitalizeAndFormat(key)}
              </th>
            ))}
          </tr>
        </thead>


        <tbody>
          {uniqueKeys.map((uniqueKey, index) => (
            <tr key={index}>
              {Object.values(predictedTableData).map((value, idx) => (
                <td key={idx}>
                  {typeof value[uniqueKey] !== "undefined" ? typeof value[uniqueKey] === 'number' ? formatAmount(value[uniqueKey]) : formatDate(value[uniqueKey]) : value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PredictedTable;

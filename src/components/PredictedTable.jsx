import React, { useState } from "react";
import { Pagination, Form, Row, Col } from "react-bootstrap";

const PredictedTable = ({ predictedTableData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10); // Change this value to set items per page
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

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = uniqueKeys.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(uniqueKeys.length / itemsPerPage);

  const getPaginationItems = () => {
    let paginationItems = [];
    const middlePage = Math.ceil(totalPages / 2);
    const halfDistance = Math.floor(middlePage / 2);
    const pagesToShow = [1, middlePage];
    let distance = halfDistance;
    while (paginationItems.length < 13 && distance >= 1) {
      pagesToShow.push(middlePage - distance);
      pagesToShow.push(middlePage + distance);
      distance = Math.floor(distance / 2);
    }
    pagesToShow.push(totalPages);
    pagesToShow.sort((a, b) => a - b); // Sort the pagesToShow array
    paginationItems = pagesToShow
      .filter((page) => page > 0 && page <= totalPages)
      .map((page, index) => (
        <Pagination.Item
          key={index}
          active={page === currentPage}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </Pagination.Item>
      ));
    return paginationItems;
  };

  const handleInputChange = (event) => {
    let value = parseInt(event.target.value);
    alert(value);
    if (value < 1 || isNaN(value)) value = 1;
    if (value > totalPages) value = totalPages;
    setCurrentPage(value);
  };

  const tstyle = {
    width: "70%",
    margin: "0 auto",
  };

  return (
      <div className="table-responsive mt-2 py-5 bg-white">
      <h3 className="text-center mb-4">Predicted Price Table</h3>
        <table className="table" style={tstyle}>
          <thead>
            <tr>
              {keys.map((key, index) => {
                if (excludedKeys.includes(key)) return null;

                return (
                  <th style={{ padding: "0 5px" }} key={index}>
                    {key === "ds" ? "Date" : capitalizeAndFormat(key)}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {currentItems.map((uniqueKey, index) => (
              <tr key={index}>
                {Object.values(predictedTableData).map((value, idx) => {
                  // Skip rendering if idx is 15
                  if (excludedValueIndex.includes(idx)) return null;

                  return (
                    <td key={idx}>
                      {typeof value[uniqueKey] !== "undefined"
                        ? typeof value[uniqueKey] === "number"
                          ? formatAmount(value[uniqueKey])
                          : formatDate(value[uniqueKey])
                        : value}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
        <Row className="mx-0">
          <Col xs={12} md={10}>
            <Pagination>
              <Pagination.Prev
                onClick={() =>
                  setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
                }
                disabled={currentPage === 1}
              />
              {getPaginationItems()}
              <Pagination.Next
                onClick={() =>
                  setCurrentPage((prevPage) =>
                    Math.min(prevPage + 1, totalPages)
                  )
                }
                disabled={currentPage === totalPages}
              />
            </Pagination>
          </Col>
          <Col>
            <Form>
              <Form.Group className="d-flex" controlId="pageNumber">
                <Form.Label className="w-50">Go to Page:</Form.Label>
                <Form.Control
                  className="w-50 p-0"
                  type="number"
                  min="1"
                  max={totalPages}
                  // value={currentPage}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </div>
  );
};

export default PredictedTable;

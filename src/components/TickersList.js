import React, { useEffect, useState } from "react";

import { Card } from "react-bootstrap";
import { Grid } from "gridjs-react";
import { h } from "gridjs";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function TickersList() {
  const [tickerList, setTickerList] = useState([]);
  useEffect(() => {
    async function getAllTickers() {
      try {
        const response = await axios.get("http://127.0.0.1:8000/tickers/");

        let responseList = response.data.tickers;

        setTickerList(responseList);
      } catch (error) {
        console.error(error);
      }
    }

    getAllTickers();
  }, []);

  const preparedList = tickerList.map((company) => [
    company.NAME_OF_COMPANY,
    company.SERIES,
    company.ISIN_NUMBER,
    company.DATE_OF_LISTING,
    company.SYMBOL,
  ]);
  const navigate = useNavigate();
  
  return (
    <>
      <Card className="card-one">
        <Card.Header>
          <Card.Title as="h6">My Wishlist</Card.Title>
        </Card.Header>
        <Card.Body className="pb-4">
          <Grid
            data={preparedList}
            columns={[
              "COMPANY",
              "SERIES",
              "ISIN NUMBER",
              "DATE OF LISTING",
              {
                name: "Actions",
                formatter: (cell, row) => {
                  return h(
                    "button",
                    {
                      className: "py-2 px-4 border rounded-md text-white bg-blue",
                      onClick: () => navigate(`/predictions/${row.cells[4].data}`),
                    },
                    "View"
                  );
                },
              },
            ]}
            search={true}
            pagination={{
              limit: 15,
            }}
            className={{
              table: "table mb-0",
            }}
          />
        </Card.Body>
      </Card>
    </>
  );
}

import React, { useEffect, useState } from "react";
import { Card, FormControl } from "react-bootstrap";
import { Grid } from "gridjs-react";
import { h } from "gridjs";
import axios from "axios";
import BackTestComp from "./BackTestComp";

const PredictCard = () => {
    
  const [selectedTicker, setTicker] = useState('');
  const [tickerList, setTickerList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

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

  const filteredList = tickerList.filter((company) =>
    company.NAME_OF_COMPANY.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const preparedList = filteredList.map((company) => [
    company.NAME_OF_COMPANY,
    company.SERIES,
    company.ISIN_NUMBER,
    company.DATE_OF_LISTING,
    company.SYMBOL,
  ]);

  return (
    <>
      <Card className="card-one">
        <Card.Header>
          <Card.Title as="h6">Search a Stock to Test</Card.Title>
        </Card.Header>
        <Card.Body className="pb-1">
          <FormControl
            type="text"
            placeholder="Search by company name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="mb-3"
          />
          {searchQuery && (
            <div style={{ maxHeight: "220px", overflow: "auto" }}>
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
                          className: "btn btn-sm btn-primary",
                          onClick: () =>setTicker(row.cells[4].data),
                        },
                        "Test"
                      );
                    },
                  },
                ]}
                search={false} // Disable built-in search as we handle it manually
                className={{ table: "table mb-0" }}
              />
            </div>
          )}
        </Card.Body>
      </Card>

      <Card className="card-one mt-3">
        <Card.Header>
          <Card.Title as="h6">Test Result of {selectedTicker}</Card.Title>
        </Card.Header>
        <Card.Body className="pb-1">
          <BackTestComp ticker={selectedTicker}/>
        </Card.Body>
      </Card>
    </>
  );
};

export default PredictCard;

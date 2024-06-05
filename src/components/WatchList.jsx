import React from "react";
import { Card } from "react-bootstrap";
import { Grid } from "gridjs-react";

const WatchList = () => {
  return (
    <>
      <Card className="card-one">
        <Card.Header>
          <Card.Title as="h6">My Wishlist</Card.Title>
        </Card.Header>
        <Card.Body className="pb-4">
          <Grid
            data={[
              [
                "State Bank of India",
                "₹820",
                "Equity",
                "Banking",
              ],
              [
                "Railway Vikash Nigam Limited",
                "₹220",
                "Equity",
                "Infrastructure",
              ],
              [
                "Tata Consultancy Service",
                "₹3120",
                "Equity",
                "Information Technology",
              ],
              [
                "Wipro",
                "₹920",
                "Equity",
                "IT Consultancy",
              ],
              [
                "Vedanta",
                "₹420",
                "Equity",
                "Electronics",
              ],
              [
                "Policy Bazar",
                "₹1320",
                "Equity",
                "Fintech",
              ],
              [
                "Axis Bank",
                "₹1151",
                "Equity",
                "Banking",
              ],
              [
                "HDFC Bank",
                "₹1520",
                "Equity",
                "Banking",
              ],
              [
                "Adani Green Energy Ltd",
                "₹1820",
                "Equity",
                "Utilities",
              ],
            ]}
            columns={["Name", "Current Price", "Segment", "Industry"]}
            search={true}
            pagination={{
              limit: 5,
            }}
            className={{
              table: "table mb-0",
            }}
          />
        </Card.Body>
      </Card>
    </>
  );
};

export default WatchList;

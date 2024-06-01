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
                "Adrian Monino",
                "$120,000",
                "Front-End Engineer",
                "Computer Science",
              ],
              [
                "Socrates Itumay",
                "$150,000",
                "Software Engineer",
                "Computer Engineering",
              ],
              [
                "Reynante Labares",
                "$250,000",
                "Product Manager",
                "Business Management",
              ],
              [
                "Reynante Labares",
                "$250,000",
                "Product Manager",
                "Business Management",
              ],
              [
                "Reynante Labares",
                "$250,000",
                "Product Manager",
                "Business Management",
              ],
              [
                "Reynante Labares",
                "$250,000",
                "Product Manager",
                "Business Management",
              ],
              [
                "Reynante Labares",
                "$250,000",
                "Product Manager",
                "Business Management",
              ],
              [
                "Reynante Labares",
                "$250,000",
                "Product Manager",
                "Business Management",
              ],
              [
                "Reynante Labares",
                "$250,000",
                "Product Manager",
                "Business Management",
              ],
            ]}
            columns={["Name", "Current Price", "Degree", "Salary"]}
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

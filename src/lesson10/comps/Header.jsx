import React from "react";
import { Button, Card, CardBody } from "reactstrap";

const Header = ({ openModal }) => {
  return (
    <Card className="mb-3">
      <CardBody className="d-flex justify-content-between">
        <h3>All Costs</h3>
        <Button color="success" onClick={openModal}>
          +
        </Button>
      </CardBody>
    </Card>
  );
};

export default Header;

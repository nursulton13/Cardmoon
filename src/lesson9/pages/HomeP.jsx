import React, { useContext } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Container,
  Row,
} from "reactstrap";
import { Context } from "../../App";
import useValue from "../hooks/useValue";

const HomeP = () => {
  // const [value, increaseValue, decreaseValue] =  useValue(1,1);
  // const [result, increaseResult, decreaseResult] =  useValue(0,value);
  const { value, setValue, interval } = useContext(Context);
  const decreaseValue = () => {
    setValue(value - interval);
  };
  const increaseValue = () => {
    setValue(value + interval);
  };
  return (
    <Container>
      <Row>
        <Col md={6} xs={12}>
          <Card className="w-100">
            <CardHeader>Value</CardHeader>
            <CardBody>
              <h3 className="text-center">{value}</h3>
            </CardBody>
            <CardFooter className="d-flex justify-content-between">
              <Button color="danger" onClick={decreaseValue}>
                -
              </Button>
              <Button color="success" onClick={increaseValue}>
                +
              </Button>
            </CardFooter>
          </Card>
        </Col>
      </Row>
      {/* <Row>
        <Col md={6} xs={12} className="my-3">
          <Card className="w-100">
            <CardHeader>Value</CardHeader>
            <CardBody>
              <h3 className="text-center">{result}</h3>
            </CardBody>
            <CardFooter className="d-flex justify-content-between">
              <Button color="danger" onClick={decreaseResult}>
                -
              </Button>
              <Button color="success" onClick={increaseResult}>
                +
              </Button>
            </CardFooter>
          </Card>
        </Col>
      </Row> */}
    </Container>
  );
};

export default HomeP;

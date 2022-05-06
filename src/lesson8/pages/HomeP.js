import React, { useReducer } from "react";
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

const initialState = {
  interval: 1,
  result: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "decreaseInterval":
      return { ...state, interval: state.interval - action.data };
    case "increaseInterval":
      return { ...state, interval: state.interval + action.data };
    case "decreaseResult":
      return { ...state, result: state.result - state.interval };
    case "increaseResult":
      return { ...state, result: state.interval + state.result };
    default:
      return state;
  }
};

const HomeP = () => {
  const [{ result, interval }, dispatch] = useReducer(reducer, initialState);
  const decreaseInterval = () => {
    dispatch({ type: "decreaseInterval",data:1 });
  };
  const increaseInterval = () => {
    dispatch({ type: "increaseInterval",data:1 });
  };
  const decreaseResult = () => {
    dispatch({ type: "decreaseResult" });
  };
  const increaseResult = () => {
    dispatch({ type: "increaseResult" });
  };

  return (
    <div>
      <Container>
        <Row>
          <Col md={6} xs={12}>
            <Card className="w-100">
              <CardHeader>Interval</CardHeader>
              <CardBody>
                <h3 className="text-center">{interval}</h3>
              </CardBody>
              <CardFooter className="d-flex justify-content-between">
                <Button color="danger" onClick={decreaseInterval}>
                  -
                </Button>
                <Button color="success" onClick={increaseInterval}>
                  +
                </Button>
              </CardFooter>
            </Card>
          </Col>
          <Col md={6} xs={12}>
            <Card className="w-100">
              <CardHeader>Result</CardHeader>
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
        </Row>
      </Container>
    </div>
  );
};

export default HomeP;

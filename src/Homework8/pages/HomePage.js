import React, { useReducer } from "react";
import { Button, Input } from "reactstrap";
import "./pages.css";

const initialState = {
  result: 0,
  interval: 1,
  name: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "intDecr":
      return { ...state, interval: state.interval - 1 };
    case "intInc":
      return { ...state, interval: state.interval + 1 };
    case "resDecr":
      return { ...state, result: state.result - state.interval };
    case "resInc":
      return { ...state, result: state.result + state.interval };
    default:
      return state;
  }
};

const HomePage = () => {
  const [{ result, interval }, dispatch] = useReducer(reducer, initialState);

  const intDecr = () => {
    dispatch({ type: "intDecr" });
  };
  const intInc = () => {
    dispatch({ type: "intInc" });
  };
  const resDecr = () => {
    dispatch({ type: "resDecr" });
  };
  const resInc = () => {
    dispatch({ type: "resInc" });
  };

  const inputVal = (e) => {
    console.log(e);
  };
  return (
    <div className="container">
      <div className="row ">
        <div className="col-md-6 col-sm-12">
          <div className="card">
            <div className="card-header">
              <div className="card-title text-center">Interval</div>
            </div>
            <div
              className="card-body text-center fw-bold"
              style={{ fontSize: "20px" }}
            >
              {interval}
            </div>
            <div className="card-footer d-flex justify-content-between">
              <Button className="btn btn-danger" onClick={intDecr}>
                -
              </Button>
              <Button className="btn btn-success" onClick={intInc}>
                +
              </Button>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="card">
            <div className="card-header">
              <div className="card-title text-center">Result</div>
            </div>
            <div
              className="card-body text-center fw-bold"
              style={{ fontSize: "20px" }}
            >
              {result}
            </div>
            <div className="card-footer d-flex justify-content-between">
              <Button className="btn btn-danger" onClick={resDecr}>
                -
              </Button>
              <Button className="btn btn-success" onClick={resInc}>
                +
              </Button>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="container budget py-3">
        <h1 className="text-center">Budget Calculator</h1>
        <div className="card card-box d-flex justify-content-center">
          <div className="inputs d-flex justify-content-between my-3">
            <Input
              type="text"
              className="mx-2"
              name="text"
              placeholder="e.g.rent"
            />
            <Input
              type="number"
              className="mx-2"
              name="price"
              placeholder="e.g.100$"
            />
          </div>
          <div className="d-flex justify-content-center">
            <Button className="text-center px-5 my-3">submit</Button>
          </div>
          <div className="screen">
            <div className="group text-black mx-2">
              <div className="cards d-flex justify-content-between">
                <div className="cards-title">dck</div>
                <div className="cards-body">jcdsj</div>
                <div className="cards-footer d-flex">
                  <div className="mx-2">del</div>
                  <div className="mx-2">edit</div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <Button className="text-center px-5 my-3">clear expenses</Button>
            </div>
            <h1 className="text-center text-black">Total price:</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

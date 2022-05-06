import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { Context } from "..";
import { Button } from "reactstrap";
import { CostModal } from "../comps";
import { useModal } from "../hooks";
import { toast } from "react-toastify";

const SpecificCategoryP = () => {
  const params = useParams();
  const { costs, setCosts } = useContext(Context);
  const [selected, setSelected] = useState(null);
  const [isOpen, openModal, closeModal] = useModal(false);
  const getValues = (value) => {
    setCosts((costs) =>
      costs.map((cost) => {
        if (cost.id === value.id) {
          return value;
        } else {
          return cost;
        }
      })
    );
  };
  const editCost = (cost) => {
    setSelected(cost);
    openModal();
  };
  const deleteCost = (i) => {
    setCosts(costs.filter((m, index) => index !== i));
    toast.success("The cost was successfully removed");
  };
  return (
    <div className="d-flex flex-wrap">
      {costs
        .filter((cost) => cost.category === params.id)
        .map((cost, index) => (
          <div
            key={cost.id}
            style={{ border: "1px solid grey", width: "310px" }}
            className="card cards  my-3 mx-auto"
          >
            <div
              className="d-flex justify-content-center card-header fw-bold fs-large"
              style={{ color: "crimson" }}
            >
              {index + 1}
            </div>
            <div className="card-body">
              <div className="card-title px-1 py-2 fw-bold">
                Category:{" "}
                <i style={{ color: "crimson", textTransform: "capitalize" }}>
                  {cost.category}
                </i>
              </div>
              <div
                className="text-center px-1 py-2 "
                style={{ textTransform: "capitalize" }}
              >
                {cost.desc}
              </div>
              <div className="card-date px-1 py-2  fw-bold ">
                Date: <i style={{ color: "crimson" }}>{cost.dateTime}</i>
              </div>
            </div>
            <div className="card-footer d-flex justify-content-between align-items-center fw-bold">
              <button
                style={{ width: "75px" }}
                className="btn btn-outline-primary pe-3 "
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
                onClick={() => editCost(cost)}
              >
                Edit
              </button>
              <div className="mx-2" style={{ color: "crimson" }}>
                {cost.price} sum
              </div>
              <button
                className="btn btn-outline-danger ps-3"
                onClick={() => deleteCost(index)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      <CostModal
        defaultValue={selected}
        closeModal={closeModal}
        getValues={getValues}
        isOpen={isOpen}
      />
    </div>
  );
};

export default SpecificCategoryP;

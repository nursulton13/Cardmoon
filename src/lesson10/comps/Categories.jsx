import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Badge } from "reactstrap";
import { Context } from "..";
import ChartPie from "./ChartPie";

const Categories = () => {
  const { costs } = useContext(Context);

  const categories = costs.reduce((total, cost) => {
    if (total.find((item) => item.category === cost.category)) {
      return total.map((obj) => {
        if (obj.category === cost.category) {
          return {
            ...cost,
            operations: obj.operations + 1,
            price: obj.price + cost.price,
          };
        } else {
          return obj;
        }
      });
    } else {
      return [
        ...total,
        { category: cost.category, operations: 1, price: cost.price },
      ];
    }
  }, []);
  return (
    <div>
      <div className="my-4">
        <ChartPie data={categories.map((item) => item.price)} />
      </div>
      {categories.map((item, index) => (
        <div
          style={{
            border: "1px solid grey",
            borderRadius: "10px",
            overflow: "hidden",
          }}
          key={index}
          className="d-flex  my-3 position-relative"
        >
          <Badge
            pill
            className="position-absolute fw-bold fs-large bg-danger"
            style={{
              color: "white",
              top: "5px",
              left: "5px",
              backgroundColor: "crimson !important",
            }}
          >
            {index + 1}
          </Badge>
          <div className="card-body">
            <div className="card-title px-1 py-2 fw-bold">
              Category:
              <i style={{ color: "crimson", textTransform: "capitalize" }}>
                {item.category}
              </i>
            </div>
            <div className="card-date px-1 py-2  fw-bold ">
              <Link
                categories={categories}
                to={`/category/${item.category}`}
                style={{ textDecoration: "none", color: "blue" }}
              >
                <button type="button" className="btn btn-danger">
                  Operations:
                  <span
                    style={{ border: "1px solid white", borderRadius: "50%" }}
                    className="badge"
                  >
                    {item.operations}
                  </span>
                </button>
              </Link>
            </div>
          </div>
          <div className="bg-white card-footer d-flex flex-irection-column justify-content-center align-items-center fw-bold bg-w">
            <div style={{ color: "crimson" }}>{item.price} sum</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;

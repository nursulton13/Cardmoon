import React, { useRef, useContext, useMemo } from "react";
import { Button, Form, InputGroup, Badge } from "reactstrap";
import { Context } from "..";
import { toast } from "react-toastify";

const CategoryP = () => {
  const inputRef = useRef();
  const { categories, setCategories } = useContext(Context);
  const createCategory = (e) => {
    e.preventDefault();
    let value = inputRef.current.value.split("");
    value[0] = value[0].toString().toUpperCase();
    value = value.join("");
    if (!categories.includes(value) && value) {
      setCategories([...categories, value]);
    } else {
      toast.error("Error");
    }
    inputRef.current.value = "";
  };
  const categoryBox = useMemo(
    () => (
      <div className="d-flex justify-content-start flex-wrap">
        {categories.map((category, index) => (
          <Button key={index} className="me-3 mb-3 position-relative">
            {category}
            <Badge
              onClick={() =>
                setCategories(categories.filter((cat) => cat !== category))
              }
              pill
              color="danger"
              className="position-absolute"
              style={{ top: "-10px", right: "-10px" }}
            >
              x
            </Badge>
          </Button>
        ))}
      </div>
    ),
    [categories, setCategories]
  );
  return (
    <div>
      <Form onSubmit={createCategory} className="mb-3">
        <InputGroup>
          <input
            placeholder="Create category"
            className="form-control"
            ref={inputRef}
          />
          <Button type="submit">Add Category</Button>
        </InputGroup>
      </Form>
      {categoryBox}
    </div>
  );
};

export default CategoryP;

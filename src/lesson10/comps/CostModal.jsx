import React, { useContext, useState, useEffect } from "react";
import { Context } from "..";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Form,
} from "reactstrap";
import { toast } from "react-toastify";

const CostModal = ({ getValues, isOpen, closeModal, defaultValue }) => {
  var date_format = new Date();
  const { categories } = useContext(Context);
  const [values, setValues] = useState({
    category: categories[0],
    price: "",
    desc: "",
    dateTime:
      date_format.getDate() +
      "/" +
      (date_format.getMonth() < "10"
        ? "0" + date_format.getMonth()
        : date_format.getMonth()) +
      "/" +
      date_format.getFullYear() +
      " " +
      date_format.getHours() +
      ":" +
      date_format.getMinutes(),
  });

  useEffect(() => {
    defaultValue && setValues({ ...defaultValue });
  }, [defaultValue]);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.price === "" && values.desc === "") {
      toast.warning("Iltimos to'liq to'ldiring !!!");
    } else {
      getValues({ ...values, price: values.price * 1 });
      closeModal();
      setValues({
        category: categories[0],
        price: "",
        desc: "",
        dateTime:
          date_format.getDate() +
          "/" +
          (date_format.getMonth() < "10"
            ? "0" + date_format.getMonth()
            : date_format.getMonth()) +
          "/" +
          date_format.getFullYear() +
          " " +
          date_format.getHours() +
          ":" +
          date_format.getMinutes(),
      });
    }
  };
  return (
    <Modal isOpen={isOpen}>
      <Form onSubmit={handleSubmit}>
        <ModalHeader>Add Cost</ModalHeader>
        <ModalBody>
          <Input
            className="mb-3"
            onChange={handleChange}
            value={values.price}
            name="price"
            placeholder="Enter price"
            pattern="^[0-9]*$"
          />
          <Input
            className="form-control mb-3"
            onChange={handleChange}
            value={values.category}
            type="select"
            name="category"
            placeholder="Select category"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </Input>
          <Input
            className="mb-3"
            onChange={handleChange}
            value={values.desc}
            name="desc"
            placeholder="Description"
            type="textarea"
          />
          <input
            className="form-control mb-3"
            onChange={handleChange}
            value={values.dateTime}
            name="dateTime"
            placeholder="Date and time"
            type="datetime"
          />
        </ModalBody>
        <ModalFooter>
          <Button onClick={closeModal}>Cancel</Button>
          <Button type="submit">{defaultValue ? "Save" : "Add"}</Button>
        </ModalFooter>
      </Form>
    </Modal>
  );
};

export default CostModal;

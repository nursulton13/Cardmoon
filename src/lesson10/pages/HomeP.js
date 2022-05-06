import React, { useContext } from "react";
import { Context } from "..";
import { Categories, CostModal, Header } from "../comps";
import { useModal } from "../hooks";
import uuid from "react-uuid";
import { ToastContainer } from "react-toastify";

const HomeP = () => {
  const { costs, setCosts } = useContext(Context);
  const [isOpen, openModal, closeModal] = useModal(false);

  const getValues = (cost) => {
    setCosts([...costs, { ...cost, price: cost.price, id: uuid() }]);
  };

  return (
    <div>
      <ToastContainer />
      <Header openModal={openModal} />
      <Categories />

      <CostModal
        isOpen={isOpen}
        closeModal={closeModal}
        getValues={getValues}
      />
    </div>
  );
};

export default HomeP;

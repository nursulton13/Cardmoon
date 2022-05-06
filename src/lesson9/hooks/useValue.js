import React, { useState } from "react";

const useValue = (v, i) => {
  const [value, setValue] = useState(v);
  const decrease = () => {
    setValue(value - i);
  };
  const increase = () => {
    setValue(value + i);
  };
  return [value, increase, decrease];
};



export default useValue;


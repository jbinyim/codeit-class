import React from "react";
import { useCounter } from "../contexts/counter.context";

const Residual = () => {
  const counter = useCounter();

  return <div>{counter.count % 5}</div>;
};

export default Residual;

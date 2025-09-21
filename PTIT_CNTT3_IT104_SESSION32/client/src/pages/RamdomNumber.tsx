import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { addNumber } from "../store/reducers/reducerRamdom";

const RandomNumber: React.FC = () => {
  const dispatch = useDispatch();
  const numbers = useSelector((state: any) => state.random.numbers);

  const handleGenerate = () => {
    const rand = Math.floor(Math.random() * 100);
    dispatch(addNumber(rand));
  };

  return (
    <div style={{ textAlign: "center", marginTop: 20 }}>
      <h2>{JSON.stringify(numbers)}</h2>
      <button onClick={handleGenerate}>Generate Random Number</button>
    </div>
  );
};

export default RandomNumber;

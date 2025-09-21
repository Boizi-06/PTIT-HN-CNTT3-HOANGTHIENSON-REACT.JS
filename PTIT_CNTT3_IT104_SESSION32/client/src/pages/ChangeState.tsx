import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCompany } from "../store/reducers/reducerCompany";

const ChangeState: React.FC = () => {
  const dispatch = useDispatch();
  const company = useSelector((state: any) => state.companyState.company);

  return (
    <div style={{ textAlign: "center", marginTop: 20 }}>
      <h2>{company}</h2>
      <button onClick={() => dispatch(changeCompany())}>Change state</button>
    </div>
  );
};

export default ChangeState;

import { useSelector, useDispatch } from "react-redux";
import { decrease, increase, reset } from "../store/silce/couterSlice";
import type { AppDispatch, RootState } from "../store/store";

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increase())}>Increase</button>
      <button onClick={() => dispatch(decrease())}>Decrease</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}

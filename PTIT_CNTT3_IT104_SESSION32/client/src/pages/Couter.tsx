import { useSelector, useDispatch } from "react-redux";

export default function Counter() {
  const dispatch = useDispatch();
  const counter = useSelector((state: any) => state.counter.value);

  return (
    <div style={{ padding: 20 }}>
      <h2>Counter: {counter}</h2>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Tăng</button>
      <button
        onClick={() => dispatch({ type: "DECREMENT" })}
        style={{ marginLeft: 8 }}
      >
        Giảm
      </button>
    </div>
  );
}

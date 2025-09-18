import { useReducer } from "react";

// Định nghĩa action
type Action = { type: "increment" } | { type: "decrement" };

// Định nghĩa state
type State = { count: number };

// Hàm reducer
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>
        Số đếm: <span>{state.count}</span>
      </h1>
      <button
        style={{
          margin: "10px",
          padding: "10px 20px",
          fontSize: "20px",
          borderRadius: "6px",
        }}
        onClick={() => dispatch({ type: "increment" })}
      >
        Tăng
      </button>
      <button
        style={{
          margin: "10px",
          padding: "10px 20px",
          fontSize: "20px",
          borderRadius: "6px",
        }}
        onClick={() => dispatch({ type: "decrement" })}
      >
        Giảm
      </button>
    </div>
  );
}

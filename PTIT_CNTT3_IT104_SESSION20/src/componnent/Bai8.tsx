import { useReducer } from "react";

// Định nghĩa state
type State = {
  name: string;
  email: string;
};

// Định nghĩa action
type Action =
  | { type: "SET_NAME"; payload: string }
  | { type: "SET_EMAIL"; payload: string };

// Hàm reducer
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    default:
      return state;
  }
}

export default function UserForm() {
  const [state, dispatch] = useReducer(reducer, { name: "", email: "" });

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "40px auto",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
        background: "white",
        fontFamily: "sans-serif",
      }}
    >
      <h2 style={{ textAlign: "center" }}>User Information Form</h2>

      <div style={{ marginBottom: "15px" }}>
        <label>Tên:</label>
        <input
          type="text"
          value={state.name}
          onChange={(e) =>
            dispatch({ type: "SET_NAME", payload: e.target.value })
          }
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "5px",
            border: "1px solid #ccc",
            borderRadius: "6px",
          }}
        />
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label>Email:</label>
        <input
          type="email"
          value={state.email}
          onChange={(e) =>
            dispatch({ type: "SET_EMAIL", payload: e.target.value })
          }
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "5px",
            border: "1px solid #ccc",
            borderRadius: "6px",
          }}
        />
      </div>

      <div
        style={{
          marginTop: "20px",
          padding: "15px",
          background: "#f8f9fa",
          borderRadius: "6px",
          borderLeft: "4px solid #007bff",
        }}
      >
        <h3>Thông tin người dùng:</h3>
        <p>
          <b>Tên:</b> {state.name || "(Chưa nhập)"}
        </p>
        <p>
          <b>Email:</b> {state.email || "(Chưa nhập)"}
        </p>
      </div>
    </div>
  );
}

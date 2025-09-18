import React, { useReducer, useState } from "react";

// Các trạng thái đăng nhập
type State = {
  loading: boolean;
  success: boolean;
  error: string | null;
};

type Action =
  | { type: "LOGIN_START" }
  | { type: "LOGIN_SUCCESS" }
  | { type: "LOGIN_ERROR"; payload: string };

const initialState: State = {
  loading: false,
  success: false,
  error: null,
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "LOGIN_START":
      return { loading: true, success: false, error: null };
    case "LOGIN_SUCCESS":
      return { loading: false, success: true, error: null };
    case "LOGIN_ERROR":
      return { loading: false, success: false, error: action.payload };
    default:
      return state;
  }
}

export default function LoginForm() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch({ type: "LOGIN_START" });

    // Giả lập gọi API với setTimeout
    setTimeout(() => {
      if (username === "admin" && password === "123") {
        dispatch({ type: "LOGIN_SUCCESS" });
      } else {
        dispatch({ type: "LOGIN_ERROR", payload: "Sai tài khoản hoặc mật khẩu!" });
      }
    }, 2000);
  };

  return (
    <div style={{ width: "300px", margin: "50px auto", fontFamily: "sans-serif" }}>
      <h2>Đăng nhập</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Tên người dùng</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Nhập tên..."
          />
        </div>
        <div>
          <label>Mật khẩu</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Nhập mật khẩu..."
          />
        </div>
        <button type="submit" disabled={state.loading}>
          {state.loading ? "Đang đăng nhập..." : "Đăng nhập"}
        </button>
      </form>

      {state.success && <p style={{ color: "green" }}>✅ Đăng nhập thành công!</p>}
      {state.error && <p style={{ color: "red" }}>{state.error}</p>}
    </div>
  );
}

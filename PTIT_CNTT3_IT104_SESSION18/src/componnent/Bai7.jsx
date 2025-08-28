import React, { useReducer, useEffect, useState } from "react";

// Khởi tạo state ban đầu
const initState = [];

// Reducer để quản lý state
function reducer(state, action) {
  switch (action.type) {
    case "INIT":
      return action.payload; // Load từ localStorage
    case "ADD":
      return [...state, { id: Date.now(), name: action.payload }];
    case "DELETE":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
}

export default function TodoApp() {
  const [state, dispatch] = useReducer(reducer, initState);
  const [input, setInput] = useState("");

  // Load dữ liệu từ localStorage khi app khởi chạy
  useEffect(() => {
    const data = localStorage.getItem("todos");
    if (data) {
      dispatch({ type: "INIT", payload: JSON.parse(data) });
    }
  }, []);

  // Mỗi lần state thay đổi thì lưu xuống localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state));
  }, [state]);

  // Thêm công việc
  const handleAdd = () => {
    if (input.trim() === "") return;
    dispatch({ type: "ADD", payload: input });
    setInput("");
  };

  // Xóa công việc
  const handleDelete = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };

  return (
    <div style={{ width: "400px", margin: "20px auto", fontFamily: "sans-serif" }}>
      <input
        type="text"
        placeholder="Nhập tên công việc"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />
      <div>
        {state.map((todo) => (
          <div
            key={todo.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "8px",
              borderBottom: "1px solid #ddd",
              alignItems: "center",
            }}
          >
            <span>{todo.name}</span>
            <button
              onClick={() => handleDelete(todo.id)}
              style={{
                background: "red",
                color: "white",
                border: "none",
                padding: "6px 12px",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Xóa
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={handleAdd}
        style={{
          marginTop: "10px",
          padding: "8px 12px",
          background: "blue",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Thêm
      </button>
    </div>
  );
}
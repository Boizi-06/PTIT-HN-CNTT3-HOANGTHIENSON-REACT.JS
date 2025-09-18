import React, { useState, useRef, useEffect } from "react";

export default function RenderCounter() {
  const [inputValue, setInputValue] = useState("");
  const renderCount = useRef(0);

  // Mỗi lần component render, tăng biến đếm
  useEffect(() => {
    renderCount.current += 1;
  });

  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: "20px" }}>
      <h2>
        <span role="img" aria-label="numbers">🔢</span> Component Render Counter
      </h2>

      <div style={{ marginBottom: "10px" }}>
        <label>
          Input:{" "}
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            style={{ padding: "5px", borderRadius: "4px", border: "1px solid #ccc" }}
          />
        </label>
      </div>

      <p>
        Component đã render:{" "}
        <strong>{renderCount.current}</strong> lần
      </p>
    </div>
  );
}

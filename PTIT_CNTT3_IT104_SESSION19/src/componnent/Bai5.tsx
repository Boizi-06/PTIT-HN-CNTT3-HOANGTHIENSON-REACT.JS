import React, { useState, useEffect } from "react";

export default function KeyTracker() {
  const [key, setKey] = useState<string>("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setKey(e.key.toUpperCase());
    };

    window.addEventListener("keydown", handleKeyDown);

    // Dọn dẹp listener khi component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>⌨️ Phím bạn vừa nhấn:</h2>
      <div
        style={{
          border: "2px dashed #333",
          borderRadius: "8px",
          padding: "30px 60px",
          fontSize: "40px",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        {key ? `[ ${key} ]` : "Chưa nhấn phím nào"}
      </div>
    </div>
  );
}

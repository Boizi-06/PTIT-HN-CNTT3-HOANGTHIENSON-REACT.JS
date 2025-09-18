import React, { Component } from "react";

export default class ButtonList extends Component {
  render() {
    const baseStyle: React.CSSProperties = {
      padding: "8px 16px",
      borderRadius: "5px",
      border: "none",
      fontSize: "14px",
      cursor: "pointer",
      fontWeight: 500,
      marginRight: "10px"
    };

    return (
      <div style={{ margin: "20px", display: "flex", gap: "10px" }}>
        <button style={{ ...baseStyle, backgroundColor: "#007bff", color: "white" }}>Primary</button>
        <button style={{ ...baseStyle, backgroundColor: "#6c757d", color: "white" }}>Secondary</button>
        <button style={{ ...baseStyle, backgroundColor: "#28a745", color: "white" }}>Success</button>
        <button style={{ ...baseStyle, backgroundColor: "#ffc107", color: "black" }}>Warning</button>
        <button style={{ ...baseStyle, backgroundColor: "#dc3545", color: "white" }}>Danger</button>
        <button style={{ ...baseStyle, backgroundColor: "#17a2b8", color: "white" }}>Info</button>
        <button style={{ ...baseStyle, backgroundColor: "#f8f9fa", color: "black", border: "1px solid #ccc" }}>Light</button>
        <button style={{ ...baseStyle, backgroundColor: "#343a40", color: "white" }}>Dark</button>
        <button style={{ ...baseStyle, background: "none", color: "#007bff", textDecoration: "underline" }}>Link</button>
      </div>
    );
  }
}

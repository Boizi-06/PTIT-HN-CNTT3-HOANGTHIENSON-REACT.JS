import  { useState } from "react";

export default function RandomQuote() {
  const quotes = [
    "Học, học nữa, học mãi.",
    "Thất bại là mẹ thành công.",
    "Không gì là không thể.",
    "Kiến tha lâu đầy tổ.",
    "Muốn đi nhanh hãy đi một mình, muốn đi xa hãy đi cùng nhau."
  ];

  const [quote, setQuote] = useState(quotes[0]);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div style={{ 
      textAlign: "center", 
      marginTop: "50px", 
      fontFamily: "Arial, sans-serif" 
    }}>
      <h2 style={{ marginBottom: "15px" }}>
        🧠 Câu nói truyền cảm hứng hôm nay:
      </h2>

      <blockquote style={{ fontStyle: "italic", fontSize: "18px", marginBottom: "20px" }}>
        "{quote}"
      </blockquote>

      <button
        onClick={getRandomQuote}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontSize: "16px",
          fontWeight: "bold"
        }}
      >
        Lấy câu nói mới
      </button>
    </div>
  );
}

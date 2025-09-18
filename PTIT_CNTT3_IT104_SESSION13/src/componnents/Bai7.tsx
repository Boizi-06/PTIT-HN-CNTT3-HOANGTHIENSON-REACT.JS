import  { useState } from "react";

function Bai7() {
  // State chứa theme và language
  const [appState, setAppState] = useState({
    theme: "light",   // light | dark
    language: "english" // english | vietnamese
  });

  // Hàm đổi theme
  const toggleTheme = () => {
    setAppState(prev => ({
      ...prev,
      theme: prev.theme === "light" ? "dark" : "light"
    }));
  };

  // Hàm đổi ngôn ngữ
  const toggleLanguage = () => {
    setAppState(prev => ({
      ...prev,
      language: prev.language === "english" ? "vietnamese" : "english"
    }));
  };

  return (
    <div
      style={{
        backgroundColor: appState.theme === "light" ? "#fff" : "#333",
        color: appState.theme === "light" ? "#000" : "#fff",
        minHeight: "100vh",
        padding: "20px"
      }}
    >
      <h1>
        {appState.language === "english"
          ? "Hello, welcome to my app!"
          : "Xin chào, chào mừng đến với ứng dụng của tôi!"}
      </h1>

      <button onClick={toggleTheme}>
        {appState.theme === "light" ? "Switch to Dark" : "Switch to Light"}
      </button>

      <button onClick={toggleLanguage} style={{ marginLeft: "10px" }}>
        {appState.language === "english" ? "Chuyển sang Tiếng Việt" : "Switch to English"}
      </button>
    </div>
  );
}


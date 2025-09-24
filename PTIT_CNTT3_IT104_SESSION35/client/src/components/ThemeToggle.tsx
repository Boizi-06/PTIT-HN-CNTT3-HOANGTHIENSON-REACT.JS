import React from "react";
import { useSelector, useDispatch } from "react-redux";
import type { AppDispatch, RootState } from "../store/store";
import { toggleTheme } from "../store/silce/themeSlice";

export default function ThemeToggle() {
  const mode = useSelector((state: RootState) => state.theme.mode);
  const dispatch = useDispatch<AppDispatch>();

  const styles: React.CSSProperties = {
    height: "200px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: mode === "light" ? "#f5f5f5" : "#333",
    color: mode === "light" ? "#000" : "#fff",
    transition: "all 0.3s ease",
  };

  return (
    <div style={styles}>
      <button onClick={() => dispatch(toggleTheme())}>
        {mode === "light" ? "Light" : "Dark"}
      </button>
    </div>
  );
}

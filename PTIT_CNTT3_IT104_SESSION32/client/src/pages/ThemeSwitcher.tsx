import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/reducers/reducerTheme";
import type { RootState } from "../store/reducers/rootReducer";

const ThemeSwitcher: React.FC = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state: RootState) => state.themeState.darkMode);

  const handleChange = () => {
    dispatch(toggleTheme());
  };

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#000" : "#fff",
        color: darkMode ? "#fff" : "#000",
        minHeight: "100px",
        padding: "20px",
      }}
    >
      <label>
        <input type="checkbox" checked={darkMode} onChange={handleChange} />
        {darkMode ? "Tối" : "Sáng"}
      </label>
    </div>
  );
};

export default ThemeSwitcher;

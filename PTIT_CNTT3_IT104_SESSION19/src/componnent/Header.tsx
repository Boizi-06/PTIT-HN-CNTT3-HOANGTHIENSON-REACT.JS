import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export const Header = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <header>
      <h1>My Themed App</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </header>
  );
};

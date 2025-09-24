// src/components/LanguageToggle.tsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { setLanguage } from "../store/silce/languageSlice";

const LanguageToggle: React.FC = () => {
  const dispatch = useDispatch();
  const { language } = useSelector((state: RootState) => state.language);

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    dispatch(setLanguage(event.target.value as "en" | "vi"));
  };

  return (
    <div>
      <select value={language} onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="vi">Tiếng Việt</option>
      </select>
      <p>Current Language: {language === "en" ? "English" : "Tiếng Việt"}</p>
    </div>
  );
};

export default LanguageToggle;

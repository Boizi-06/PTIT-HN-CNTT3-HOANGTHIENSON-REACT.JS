import React, { createContext, useState, ReactNode } from "react";

// Định nghĩa kiểu dữ liệu cho Context
type LanguageContextType = {
  language: string; // "en" hoặc "vi"
  changeLanguage: (lang: string) => void;
};

// Tạo Context
export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Tạo Provider để bọc App
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState("vi"); // mặc định tiếng Việt

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function LanguageSelector() {
  const { t, i18n } = useTranslation(); // useTranslation hook ilə tərcüməni idarə edirik
  const [selectedLanguage, setSelectedLanguage] = useState("en"); // Default dil İngilis dili
  
  const navigate = useNavigate();

  useEffect(() => {
    i18n.changeLanguage(selectedLanguage); // Dil dəyişdikdə i18n yenilənir
  }, [selectedLanguage, i18n]);

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value); // Dil seçimi yenilənir
  };

  const handleSignIn = () => {
    navigate("/login"); // İstifadəçini login səhifəsinə yönləndirir
  };

  return (
    <div className="relative flex items-center space-x-4 z-30">
      <select
        value={selectedLanguage}
        onChange={handleLanguageChange}
        className="bg-black text-white border border-gray-700 px-4 py-2 rounded-md focus:outline-none"
      >
        <option value="en">English</option>
        <option value="az">Azərbaycan</option>
        <option value="ru">Русский</option>
      </select>
      <button
        onClick={handleSignIn}
        className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition relative z-40"
      >
        {t("sign_in")}
      </button>
    </div>
  );
}

export default LanguageSelector;

import React from "react";
import { useNavigate } from "react-router-dom"; 

function LanguageSelector({ language, setLanguage }) {
  const navigate = useNavigate(); 
  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
    alert(`Selected language: ${e.target.value}`);
  };

  const handleSignIn = () => {
    navigate("/login"); 
  };

  return (
    <div className="relative flex items-center space-x-4 z-30">
      <select
        value={language}
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
        Sign In
      </button>
    </div>
  );
}

export default LanguageSelector;

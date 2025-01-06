import React from "react";
import LanguageSelector from "./LanguageSelector";
import MainContent from "./MainContent";
import NetFlixBG from "../../assets/NetFlixBG.jpg";
import Logo from "../components/Logo"

const Header = ({ language, setLanguage }) => {
  return (
    <header
      className="relative bg-cover bg-center h-screen flex flex-col"
      style={{
        backgroundImage: `url(${NetFlixBG})`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70 pointer-events-none z-0"></div>

      <div className="absolute top-0 left-0 right-0 flex justify-between items-center px-4 md:px-8 py-4 z-20">
        <Logo />
        <LanguageSelector language={language} setLanguage={setLanguage} />
      </div>

      <div className="flex flex-grow items-center justify-center z-10">
        <MainContent />
      </div>
    </header>
  );
};

export default Header;

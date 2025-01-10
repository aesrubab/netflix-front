import React from "react";
import NetflixLogo from "../../../assets/NetflixLogo.png";

const Logo = () => {
  return (
    <div className="flex items-center">
      <img src={NetflixLogo} alt="Netflix Logo" className="w-24 md:w-32 h-auto" />
    </div>
  );
};

export default Logo;

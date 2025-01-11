import React, { useState } from "react";
import NetflixLogo from "../../assets/NetflixLogo.png";
import { Link, useNavigate } from "react-router-dom"; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate(); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token"); 
    navigate("/login"); 
  };

  return (
    <nav className="bg-black text-white py-4 px-8 flex justify-between items-center relative">
      <div className="flex items-center gap-12">
        <Link to="/" className="flex items-center">
          <img src={NetflixLogo} alt="Netflix Logo" className="h-14" />
        </Link>
        <ul className="hidden md:flex gap-6 text-lg font-bold">
          <li>
            <Link to="/home" className="hover:underline cursor-pointer">
              Home
            </Link>
          </li>
          <li>
            <Link to="/movies" className="hover:underline cursor-pointer">
              Movies
            </Link>
          </li>
          <li>
            <Link to="/tvshows" className="hover:underline cursor-pointer">
              TV Shows
            </Link>
          </li>
        </ul>
      </div>

      <ul className="hidden md:flex gap-6 text-lg font-bold">
        <li>
          <a href="/my-list" className="hover:underline cursor-pointer">
            My List
          </a>
        </li>
        <li>
          <a href="/profile" className="hover:underline cursor-pointer">
            Profile
          </a>
        </li>
        <li>
          <button onClick={handleLogout} className="hover:underline cursor-pointer">
            Logout
          </button>
        </li>
      </ul>

      <div className="relative md:hidden">
        <button className="text-white text-2xl" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </button>

        {isMenuOpen && (
          <div
            className="absolute left-1/2 transform -translate-x-1/2 bg-black w-[200px] shadow-lg rounded-md mt-2 z-50"
            style={{ top: "calc(100% + 8px)" }}
          >
            <ul className="flex flex-col items-start text-lg font-bold p-4 gap-2">
              <li>
                <Link to="/" className="hover:underline cursor-pointer">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/movies" className="hover:underline cursor-pointer">
                  Movies
                </Link>
              </li>
              <li>
                <Link to="/tvshows" className="hover:underline cursor-pointer">
                  TV Shows
                </Link>
              </li>
              <li>
                <a href="/my-list" className="hover:underline cursor-pointer">
                  My List
                </a>
              </li>
              <li>
                <a href="/profile" className="hover:underline cursor-pointer">
                  Profile
                </a>
              </li>
              <li>
                <button onClick={handleLogout} className="hover:underline cursor-pointer">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

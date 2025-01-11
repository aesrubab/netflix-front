import React, { useState } from 'react';
import Navbar from '../components/navBar';
import movie from "../../assets/movie.png";
import { Link } from 'react-router-dom';

const Homepage = () => {

  return (
    <div className="relative h-screen w-full bg-cover bg-center" style={{ backgroundImage: `url(${movie})` }}>
      <div className="absolute top-0 left-0 w-full z-10">
        <Navbar />
      </div>

      <div className="absolute top-1/3 left-8 text-white z-20">
        <h1 className="text-4xl font-bold">Devil in Ohio</h1>
        <p className="mt-4 max-w-md">Determined to protect a young patient who escaped a mysterious cult, a psychiatrist takes the girl in, putting her own family — and life — in danger.</p>
        <div className="mt-6">
        <Link to="/details/movie/402431">
          <button 
            className="bg-white text-black px-6 py-3 rounded-lg text-lg font-semibold transition duration-300"
          >
            <i className="fas fa-play mr-2"></i>
            Play
          </button>
          </Link>
          <button 
            className="border border-black bg-gray-600 text-white px-6  mx-3 py-3 rounded-lg text-lg font-semibold transition duration-300"
          >
             <i className="fas fa-info-circle mr-2"></i>
            More info
          </button>
        </div>
      </div>

      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    </div>
  );
};

export default Homepage;
import React from "react";

const Headerr = () => {
  return (
    <header className="bg-black text-white p-4 flex justify-between items-center z-20 relative">
      <div className="text-2xl font-bold">NETFLIX</div>
      <nav className="flex space-x-4">
        <a href="#" className="hover:underline">
          Home
        </a>
        <a href="#" className="hover:underline">
          TV Shows
        </a>
        <a href="#" className="hover:underline">
          Movies
        </a>
        <a href="#" className="hover:underline">
          New & Popular
        </a>
        <a href="#" className="hover:underline">
          My List
        </a>
      </nav>
    </header>
  );
};

export default Headerr;

import React from "react";

const MovieDetailsModal = ({ movieDetails, onClose }) => {
  if (!movieDetails) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-black text-white w-2/3 p-6 rounded-lg relative">
        <button
          className="absolute top-4 right-4 text-white text-2xl"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold">{movieDetails.title || movieDetails.name}</h2>
        <p className="mt-2">{movieDetails.overview}</p>
        <div className="mt-4 flex gap-2">
          <span className="px-4 py-2 bg-gray-800 rounded-lg">
            {movieDetails.release_date || movieDetails.first_air_date}
          </span>
          <span className="px-4 py-2 bg-gray-800 rounded-lg">
            {movieDetails.vote_average}/10
          </span>
          <span className="px-4 py-2 bg-gray-800 rounded-lg">
            {movieDetails.genres.map((genre) => genre.name).join(", ")}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsModal;

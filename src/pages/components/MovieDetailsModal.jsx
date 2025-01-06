import React from "react";

const MovieDetailsModal = ({ movieDetails, onClose }) => {
  if (!movieDetails) return null;
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div
        className="bg-black text-white w-9/12 max-w-md p-4 rounded-lg relative shadow-lg overflow-y-auto"
        style={{ height: "70vh", width: "70vh" }} // Makes the modal square
      >
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-white text-xl focus:outline-none hover:text-gray-400 z-50"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Content Section */}
        <div className="relative">
          {/* Poster Image */}
          <div className="relative mb-4">
            <img
              src={
                movieDetails.content.poster_path
                  ? `${imageBaseUrl}${movieDetails.content.poster_path}`
                  : "/placeholder.jpg"
              }
              alt={movieDetails.content.title || movieDetails.content.name}
              className="w-full h-auto rounded-lg shadow-md"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-lg"></div>
          </div>

          {/* Text Section */}
          <div className="pl-4">
            {/* Title */}
            <h2 className="text-lg font-bold mb-2">
              {movieDetails.content.title || movieDetails.content.name}
            </h2>

            {/* Overview */}
            <p className="text-xs mb-4">
              {movieDetails.content.overview}
            </p>

            {/* Additional Info */}
            <div className="flex flex-wrap gap-2 mb-4">
              {movieDetails.content.release_date && (
                <span className="px-2 py-1 bg-gray-800 rounded-md text-xs">
                  {movieDetails.content.release_date}
                </span>
              )}
              {movieDetails.content.vote_average && (
                <span className="px-2 py-1 bg-gray-800 rounded-md text-xs">
                  {movieDetails.content.vote_average}/10
                </span>
              )}
              {movieDetails.content.genres && (
                <span className="px-2 py-1 bg-gray-800 rounded-md text-xs">
                  {movieDetails.content.genres.map((genre) => genre.name).join(", ")}
                </span>
              )}
            </div>

            {/* Get Started Button (Aligned Left) */}
            <div className="text-left">
              <button
                className="px-4 py-2 bg-red-600 text-white text-sm rounded-md hover:bg-red-700 transition-all"
                onClick={() => alert('Get Started clicked!')} // Add your custom function here
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsModal;

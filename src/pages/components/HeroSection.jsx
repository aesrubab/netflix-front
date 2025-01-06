import React, { useState } from 'react';

const HeroSection = ({ selectedMovie, onPlayClick }) => {
  const [showTrailer, setShowTrailer] = useState(false);

  return (
    <div className="relative text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${selectedMovie?.image})`,
          zIndex: -10,
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content Section */}
      <div className="relative z-10 h-full md:h-[500px] flex flex-col justify-center items-start p-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">{selectedMovie?.title}</h1>
        <p className="mt-4 max-w-lg sm:text-lg text-base">{selectedMovie?.description}</p>
        <div className="mt-4 flex flex-col sm:flex-row gap-2">
          <button
            className="bg-white text-black px-4 py-2 rounded"
            onClick={() => {
              setShowTrailer(true);
              onPlayClick(selectedMovie?.trailerUrl); // Trigger to show trailer
            }}
          >
            Play
          </button>
          <button className="bg-gray-700 px-4 py-2 rounded">More Info</button>
        </div>
      </div>

      {/* Movie Image at the Bottom */}
      <div className="absolute bottom-4 left-0 right-0 w-full h-[200px] sm:h-[300px] bg-cover bg-center">
        <img
          src={selectedMovie?.image}
          alt="Movie"
          className="w-full h-full object-cover rounded-t-lg"
        />
      </div>

      {/* Trailer Section (if Play is clicked) */}
      {showTrailer && selectedMovie?.trailerUrl && (
        <div className="absolute inset-0 flex justify-center items-center z-30 bg-black/80">
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${selectedMovie.trailerUrl}`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Movie Trailer"
            className="w-full sm:w-[560px] sm:h-[315px]"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default HeroSection;

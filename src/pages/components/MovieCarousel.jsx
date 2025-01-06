import React from "react";
import MovieCard from "./MovieCard";

const MovieCarousel = ({ movies, onCardClick }) => {
  return (
    <div className="w-full flex overflow-x-auto gap-4 scrollbar-hide">
      {movies.map((movie, index) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          index={index}
          onCardClick={onCardClick}
        />
      ))}
    </div>
  );
};

export default MovieCarousel;

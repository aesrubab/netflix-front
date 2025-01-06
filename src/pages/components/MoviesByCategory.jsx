import React, { useEffect, useState } from 'react';
import { fetchMoviesByCategory } from './services_api';

const MoviesByCategory = ({ accessToken }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const data = await fetchMoviesByCategory(accessToken);
      setMovies(data);
    };
    getMovies();
  }, [accessToken]);

  return (
    <div>
      <h2>Movies by Category</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesByCategory;
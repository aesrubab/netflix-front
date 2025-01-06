// components/SimilarMovies.jsx
import React, { useEffect, useState } from 'react';
import { fetchSimilarMovies } from './services_api';

const SimilarMovies = ({ movieId, accessToken }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const data = await fetchSimilarMovies(movieId, accessToken);
      setMovies(data);
    };
    getMovies();
  }, [movieId, accessToken]);

  return (
    <div>
      <h2>Similar Movies</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default SimilarMovies;
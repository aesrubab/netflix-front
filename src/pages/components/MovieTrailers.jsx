
import React, { useEffect, useState } from 'react';
import { fetchMovieTrailers } from './services_api';
const MovieTrailers = ({ movieId, accessToken }) => {
  const [trailers, setTrailers] = useState([]);

  useEffect(() => {
    const getTrailers = async () => {
      const data = await fetchMovieTrailers(movieId, accessToken);
      setTrailers(data);
    };
    getTrailers();
  }, [movieId, accessToken]);

  return (
    <div>
      <h2>Movie Trailers</h2>
      <ul>
        {trailers.map((trailer) => (
          <li key={trailer.id}>{trailer.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieTrailers;
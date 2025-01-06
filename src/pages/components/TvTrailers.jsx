// components/TvTrailers.jsx
import React, { useEffect, useState } from 'react';
import { fetchTvTrailers } from './services_api';
const TvTrailers = ({ tvId, accessToken }) => {
  const [trailers, setTrailers] = useState([]);

  useEffect(() => {
    const getTrailers = async () => {
      const data = await fetchTvTrailers(tvId, accessToken);
      setTrailers(data);
    };
    getTrailers();
  }, [tvId, accessToken]);

  return (
    <div>
      <h2>TV Show Trailers</h2>
      <ul>
        {trailers.map((trailer) => (
          <li key={trailer.id}>{trailer.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TvTrailers;
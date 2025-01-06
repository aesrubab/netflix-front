import React, { useEffect, useState } from 'react';
import { fetchSimilarTvShows } from './services_api';

const SimilarTvShows = ({ tvId, accessToken }) => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const getShows = async () => {
      const data = await fetchSimilarTvShows(tvId, accessToken);
      setShows(data);
    };
    getShows();
  }, [tvId, accessToken]);

  return (
    <div>
      <h2>Similar TV Shows</h2>
      <ul>
        {shows.map((show) => (
          <li key={show.id}>{show.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default SimilarTvShows;

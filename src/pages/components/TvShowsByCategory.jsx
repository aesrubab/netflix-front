
import React, { useEffect, useState } from 'react';
import { fetchTvShowsByCategory } from './services_api';

const TvShowsByCategory = ({ accessToken }) => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const getShows = async () => {
      const data = await fetchTvShowsByCategory(accessToken);
      setShows(data);
    };
    getShows();
  }, [accessToken]);

  return (
    <div>
      <h2>TV Shows by Category</h2>
      <ul>
        {shows.map((show) => (
          <li key={show.id}>{show.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TvShowsByCategory;
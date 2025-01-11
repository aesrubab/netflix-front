import React, { useState, useEffect } from "react";
import Navbar from "./components/navBar";
import { fetchTrendingTvShows, getAccessToken } from "./components/services_api"; 
import { Link } from "react-router-dom";

const TvShows = () => {
  const [tvShows, setTvShows] = useState([]); 
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null); 
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    const fetchTvShows = async () => {
      try {
        setLoading(true);
        const accessToken = await getAccessToken(); 
        if (!accessToken) {
          setError("No access token found.");
          return;
        }

        const response = await fetchTrendingTvShows(); 
        if (response.success) {
          setTvShows(response.content); 
        } else {
          setError(response.message || "Something went wrong!");
        }
      } catch (error) {
        setError(error.message || "An error occurred while fetching tv shows.");
      } finally {
        setLoading(false);
      }
    };

    fetchTvShows(); 
  }, []);

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6">Tv Shows</h1>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        {loading && <p className="text-center">Loading Tv Shows...</p>}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {tvShows.length > 0 ? (
            tvShows.map((tvShow) => (
              <div key={tvShow.id} className="rounded overflow-hidden">
                <Link to={`/details/tv/${tvShow.id}`}>
                  <img
                    src={`${imageBaseUrl}${tvShow.poster_path}`}
                    alt={tvShow.title}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                  <h2 className="text-lg font-bold mt-2">{tvShow.title}</h2>
                </Link>
              </div>
            ))
          ) : (
            <p>No TV Shows found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TvShows;

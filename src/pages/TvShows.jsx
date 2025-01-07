
import React, { useState, useEffect } from "react";
import Navbar from "./components/navBar";
import { fetchTvShowsByCategory, getAccessToken } from "./components/services_api"; 

const TvShows = () => {
  const [tvShows, setTvShows] = useState([]); 
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchTvShows = async () => {
      try {
        setLoading(true);
        const accessToken = await localStorage.getItem("token"); 
        if (!accessToken) {
          setError("No access token found.");
          return;
        }

        const response = await fetchTvShowsByCategory(accessToken); 
        if (response.success) {
          setTvShows(response.data.shows); 
        } else {
          setError(response.message || "Something went wrong!");
        }
      } catch (error) {
        setError(error.message || "An error occurred while fetching TV shows.");
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
        <h1 className="text-3xl font-bold mb-6">TV Shows</h1>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        {loading && <p className="text-center">Loading TV shows...</p>}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {tvShows.length > 0 ? (
            tvShows.map((show) => (
              <div key={show.id} className="rounded overflow-hidden">
                <img
                  src={show.posterUrl}
                  alt={show.title}
                  className="w-full h-auto object-cover rounded-lg"
                />
                <h2 className="text-lg font-bold mt-2 truncate">{show.title}</h2>
              </div>
            ))
          ) : (
            <p>No TV shows found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TvShows;

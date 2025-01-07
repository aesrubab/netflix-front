import React, { useState, useEffect } from "react";
import Navbar from "./components/navBar";
import { fetchMoviesByCategory, getAccessToken } from "./components/services_api"; 

const Movies = () => {
  const [movies, setMovies] = useState([]); 
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const accessToken = await getAccessToken(); 
        if (!accessToken) {
          setError("No access token found.");
          return;
        }

        const response = await fetchMoviesByCategory(accessToken); 
        if (response.success) {
          setMovies(response.data.movies); 
        } else {
          setError(response.message || "Something went wrong!");
        }
      } catch (error) {
        setError(error.message || "An error occurred while fetching movies.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies(); 
  }, []);

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6">Movies</h1>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        {loading && <p className="text-center">Loading movies...</p>}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {movies.length > 0 ? (
            movies.map((movie) => (
              <div key={movie.id} className="rounded overflow-hidden">
                <img
                  src={movie.posterUrl}
                  alt={movie.title}
                  className="w-full h-auto object-cover rounded-lg"
                />
                <h2 className="text-lg font-bold mt-2">{movie.title}</h2>
              </div>
            ))
          ) : (
            <p>No movies found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Movies;

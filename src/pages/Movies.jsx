import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./components/navBar";
import { fetchTrendingMovies, getAccessToken } from "./components/services_api";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const accessToken = await getAccessToken();
        if (!accessToken) {
          setError("No access token found.");
          return;
        }

        const response = await fetchTrendingMovies();
        if (response.success) {
          setMovies(response.content);
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
                <Link to={`/details/movie/${movie.id}`}>
                  <img
                    src={`${imageBaseUrl}${movie.poster_path}`}
                    alt={movie.title}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                  <h2 className="text-lg font-bold mt-2">{movie.title}</h2>
                </Link>
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

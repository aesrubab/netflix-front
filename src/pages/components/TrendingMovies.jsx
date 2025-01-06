import React, { useState, useEffect, useRef } from "react";
import RedBar from "../components/RedBar";
import TrendingHeader from "../components/TrendingHeader";
import MovieDetailsModal from "../components/MovieDetailsModal";
import MovieCard from "../components/MovieCard";
import ReasonToJoin from "../components/ReasonToJoin";

const TrendingMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("TV Shows");
  const [selectedMovie, setSelectedMovie] = useState(null); 
  const scrollRef = useRef(null);

  useEffect(() => {
    const fetchTrendingData = async () => {
      try {
        setLoading(true);
        const endpoint =
          selectedCategory === "Movies"
            ? "http://localhost:5001/api/v1/movie/trending"
            : "http://localhost:5001/api/v1/tv/trending";

        const response = await fetch(endpoint);
        if (!response.ok) {
          throw new Error(`Failed to fetch data for ${selectedCategory}.`);
        }

        const data = await response.json();
        setMovies(data.content || []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingData();
  }, [selectedCategory]);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  const handleCardClick = async (movieId) => {
    try {
      const response = await fetch(`http://localhost:5001/api/v1/movie/${movieId}/details`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (!response.ok) {
        throw new Error("Failed to fetch movie details.");
      }
  
      const data = await response.json();
      setSelectedMovie(data); 
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  };

  if (loading) {
    return <div className="text-white">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-600">Error: {error}</div>;
  }

  return (
    <div className="bg-gradient-to-b from-gray-900 via-black to-black min-h-screen p-6 relative">
      <RedBar />
      <TrendingHeader title="Trending Now" />

      <div className="mb-4 mt-8">
        <select
          id="category-select"
          className="text-white bg-black border border-gray-700 px-4 py-2 rounded-md"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="Movies">Movies</option>
          <option value="TV Shows">TV Shows – English</option>
        </select>
      </div>

      <div className="relative">
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-70 text-white p-3 rounded-full z-10"
        >
          &lt;
        </button>

        <div ref={scrollRef} className="flex overflow-hidden gap-4">
          {movies.map((movie, index) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              index={index}
              onCardClick={handleCardClick}
            />
          ))}
        </div>

        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-70 text-white p-3 rounded-full z-10"
        >
          &gt;
        </button>
      </div>

      {selectedMovie && (
        <MovieDetailsModal
          movieDetails={selectedMovie}
          onClose={() => setSelectedMovie(null)} 
        />
      )}

      <ReasonToJoin />

    </div>
  );
};

export default TrendingMovies;

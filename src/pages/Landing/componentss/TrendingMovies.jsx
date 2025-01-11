import React, { useState, useEffect, useRef } from "react";
import RedBar from "./RedBar";
import TrendingHeader from "./TrendingHeader";
import MovieDetailsModal from "../componentss/MovieDetailsModal";
import MovieCard from "./MovieCard";
import ReasonToJoin from "./ReasonToJoin";
import { useTranslation } from "react-i18next";

const TrendingMovies = () => {
  const { t } = useTranslation(); 
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
          throw new Error(t('error.fetchFailed', { category: selectedCategory }));
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
  }, [selectedCategory, t]);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  const handleCardClick = async (movieId) => {
    try {
      const endpoint = selectedCategory === "Movies"
        ? `http://localhost:5001/api/v1/movie/${movieId}/details`
        : `http://localhost:5001/api/v1/tv/${movieId}/details`;
  
      const response = await fetch(endpoint, {
        headers: {
          Accept: "application/json"
        }
      });
  
      if (!response.ok) {
        throw new Error(t('error.movieDetailsFetchFailed'));
      }
  
      const data = await response.json();
      setSelectedMovie(data); 
    } catch (error) {
      console.error(t('error.movieDetailsError'), error);
    }
  };

  if (loading) {
    return <div className="text-white">{t('loading')}</div>;
  }

  if (error) {
    return <div className="text-red-600">{t('error.generic', { error })}</div>;
  }

  return (
    <div className="bg-gradient-to-b from-gray-900 via-black to-black min-h-screen p-6 relative">
      <RedBar />
      <TrendingHeader title={t('trendingNow')} />

      <div className="mb-4 mt-8">
        <select
          id="category-select"
          className="text-white bg-black border border-gray-700 px-4 py-2 rounded-md"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="Movies">{t('movie')}</option>
          <option value="TV Shows">{t('tvShows')}</option>
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

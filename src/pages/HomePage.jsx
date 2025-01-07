import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500";
  const [items, setItems] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showTrailer, setShowTrailer] = useState(false);
  const [trailerUrl, setTrailerUrl] = useState(null);

  const accessToken = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5001/api/v1/movie/trending");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setItems(data.content);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const fetchTrailer = async (movieId) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/trailers`,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${accessToken}`
          },
        }
      );
      if (!response.ok) {
        throw new Error(`Error fetching trailer: ${response.status}`);
      }
      const data = await response.json();
      if (data.results && data.results.length > 0) {
        const trailer = data.results.find((video) => video.type === "Trailer");
        setTrailerUrl(trailer ? trailer.key : null);
      }
    } catch (error) {
      console.error("Error fetching trailer:", error);
    }
  };

  const handleMovieClick = (movie) => {
    setSelectedMovie({
      ...movie,
      image: `${imageBaseUrl}${movie.backdrop_path}`,
      description: movie.overview,
    });
    fetchTrailer(movie.id);
  };

  const handlePlayClick = () => {
    setShowTrailer(true);
  };

  return (
    <div>
      <header className="bg-black text-white p-4 flex justify-between items-center z-30 absolute top-0 left-0 w-full opacity-80">
        <div className="text-2xl font-bold">NETFLIX</div>
        <nav className="flex space-x-4">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/tvshows" className="hover:underline">
            TV Shows
          </Link>
          <Link to="/movies" className="hover:underline">
            Movies
          </Link>
          <Link to="#" className="hover:underline">
            New & Popular
          </Link>
          <Link to="#" className="hover:underline">
            My List
          </Link>
        </nav>
      </header>

      <div className="relative text-white">
        <div
          className="absolute inset-0 bg-center"
          style={{
            backgroundImage: `url(${selectedMovie?.image})`,
            zIndex: -10,
            height: '100vh'
          }}
        ></div>

        <div className="absolute inset-0 bg-black/50"></div>

        <div className=" relative z-10 h-full md:h-[500px] flex flex-col justify-center items-start p-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">{selectedMovie?.title}</h1>
          <p className="mt-4 max-w-lg sm:text-lg text-base">{selectedMovie?.description}</p>
          <div className="mt-4 flex flex-col sm:flex-row gap-2">
            <button
              className="bg-white text-black px-4 py-2 rounded"
              onClick={handlePlayClick} 
            >
              Play
            </button>
            <button className="bg-gray-700 px-4 py-2 rounded">More Info</button>
          </div>
        </div>

        {showTrailer && trailerUrl && (
          <div className="absolute inset-0 flex justify-center items-center z-30 bg-black/80">
            <iframe
              width="360"
              height="215"
              src={`https://www.youtube.com/embed/${trailerUrl}`}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Movie Trailer"
              className="sm:w-[560px] sm:h-[315px]"
            ></iframe>
          </div>
        )}
      </div>

      <div className="p-4 bg-black/80 text-white mt-20">
        <h2 className="text-2xl font-bold mb-2">Popular on Netflix</h2>
        <div className="flex overflow-x-auto gap-4 py-4">
          {Array.isArray(items) && items.length > 0 ? (
            items.map((item) => (
              <div
                key={item.id}
                className="min-w-[150px] cursor-pointer"
                onClick={() => handleMovieClick(item)} 
              >
                <img
                  src={`${imageBaseUrl}${item.poster_path}`}
                  alt={item.title}
                  className="w-full rounded"
                />
                <p className="text-sm mt-2">{item.title}</p>
              </div>
            ))
          ) : (
            <p>No items found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;

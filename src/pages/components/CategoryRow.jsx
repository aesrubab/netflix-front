import React, { useState, useEffect } from "react";

const CategoryRow = () => {
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500";
  const [items, setItems] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showTrailer, setShowTrailer] = useState(false);
  const [trailerUrl, setTrailerUrl] = useState(null); // Store the trailer URL

  const accessToken = "your-access-token"; // Buraya accessToken'ınızı yerleştirin

  // Trending filmleri fetch et
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

  // Seçilen film için trailer'ı al
  const fetchTrailer = async (movieId) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=your-api-key`, // API'den trailer bilgilerini al
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${accessToken}`, // Bearer token
          },
        }
      );
      if (!response.ok) {
        throw new Error(`Error fetching trailer: ${response.status}`);
      }
      const data = await response.json();
      if (data.results && data.results.length > 0) {
        const trailer = data.results.find((video) => video.type === "Trailer");
        setTrailerUrl(trailer ? trailer.key : null); // Trailer URL'sini al
      }
    } catch (error) {
      console.error("Error fetching trailer:", error);
    }
  };

  const handleMovieClick = (movie) => {
    setSelectedMovie({
      ...movie,
      image: `${imageBaseUrl}${movie.poster_path}`,
      description: movie.overview,
    });
    fetchTrailer(movie.id); // Seçilen film için trailer'ı çek
  };

  const handlePlayClick = () => {
    setShowTrailer(true); // Trailer'ı göstermek için durumu true yap
  };

  return (
    <div>
      <div className="relative text-white">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${selectedMovie?.image})`,
            zIndex: -10,
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content Section */}
        <div className="relative z-10 h-full md:h-[500px] flex flex-col justify-center items-start p-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">{selectedMovie?.title}</h1>
          <p className="mt-4 max-w-lg sm:text-lg text-base">{selectedMovie?.description}</p>
          <div className="mt-4 flex flex-col sm:flex-row gap-2">
            <button
              className="bg-white text-black px-4 py-2 rounded"
              onClick={handlePlayClick} // Play butonuna basıldığında trailer'ı göster
            >
              Play
            </button>
            <button className="bg-gray-700 px-4 py-2 rounded">More Info</button>
          </div>
        </div>

        {/* Movie Image at the Bottom */}
        <div className="absolute bottom-4 left-0 right-0 w-full h-[200px] sm:h-[300px] bg-cover bg-center">
          <img
            src={selectedMovie?.image}
            alt="Movie"
            className="w-full h-full object-cover rounded-t-lg"
          />
        </div>

        {/* Trailer Section (if Play is clicked) */}
        {showTrailer && trailerUrl && (
          <div className="absolute inset-0 flex justify-center items-center z-30 bg-black/80">
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${trailerUrl}`}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Movie Trailer"
              className="w-full sm:w-[560px] sm:h-[315px]"
            ></iframe>
          </div>
        )}
      </div>

      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2">Popular on Netflix</h2>
        <div className="flex space-x-4 overflow-x-scroll">
          {Array.isArray(items) && items.length > 0 ? (
            items.map((item) => (
              <div
                key={item.id}
                className="min-w-[150px] cursor-pointer"
                onClick={() => handleMovieClick(item)} // Film tıklanınca trailer'ı çek
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

export default CategoryRow;

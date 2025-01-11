import React, { useState, useEffect, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "./components/navBar";
import { getAccessToken, fetchMovieTrailers, fetchSimilarMovies, fetchTvTrailers, fetchSimilarTvShows } from "./components/services_api";

const Details = () => {
  const { id, type } = useParams();
  const [trailers, setTrailers] = useState([]);
  const [similarItems, setSimilarItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDetails = useCallback(async () => {
    try {
      setLoading(true);
      const accessToken = await getAccessToken();

      if (!accessToken) {
        throw new Error("Failed to retrieve access token.");
      }

      let trailerResponse = {};
      let similarResponse = {};

      if (type === "movie") {
        trailerResponse = await fetchMovieTrailers(id, accessToken);
        similarResponse = await fetchSimilarMovies(id, accessToken);
      } else if (type === "tv") {
        trailerResponse = await fetchTvTrailers(id, accessToken);
        similarResponse = await fetchSimilarTvShows(id, accessToken);
      }
    
      if (trailerResponse?.trailers) {
        setTrailers(trailerResponse.trailers);
      } else {
        setTrailers([]);
      }

      if (similarResponse?.similar) {
        setSimilarItems(similarResponse.similar);
      } else {
        setSimilarItems([]);
      }
    } catch (error) {
      console.error("Error fetching details:", error);
      setError(error.message || "An error occurred while fetching details.");
    } finally {
      setLoading(false);
    }
  }, [id, type]);

  useEffect(() => {
    fetchDetails();
  }, [fetchDetails]);

  if (loading) {
    return <p className="text-white">Loading...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <div className="p-8">
        <div className="mt-6">
          <h2 className="text-2xl font-bold mb-4">Trailers</h2>
          {trailers.length > 0 ? (
            <div className="mb-4">
              <iframe
                width="100%"
                height="400"
                src={`https://www.youtube.com/embed/${trailers[0].key}`}
                title={trailers[0].name}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <p className="mt-2">{trailers[0].name}</p>
            </div>
          ) : (
            <p>No trailers available.</p>
          )}
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4">Similar {type === "movie" ? "Movies" : "TV Shows"}</h2>
          {similarItems.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {similarItems.map((item) => (
                <div key={item.id} className="rounded overflow-hidden">
                  <Link to={`/details/${type}/${item.id}`}>
                    <img
                      src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                      alt={item.title || item.name}
                      className="w-full h-auto object-cover rounded-lg"
                    />
                    <h3 className="text-lg mt-2">{item.title || item.name}</h3>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <p>No similar {type === "movie" ? "movies" : "TV shows"} found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Details;

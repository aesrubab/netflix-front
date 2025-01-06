const MovieCard = ({ movie, index, onCardClick }) => {
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

  return (
      <div
          className="relative flex-shrink-0 w-40 cursor-pointer transition-transform duration-300 transform hover:-translate-y-3"
          onClick={() => onCardClick(movie.id)} 
      >
          <div className="relative w-full h-60 rounded-lg overflow-hidden">
              <img
                  src={
                      movie.poster_path
                          ? `${imageBaseUrl}${movie.poster_path}`
                          : "/placeholder.jpg"
                  }
                  alt={movie.title}
                  className="w-full h-full object-cover"
              />
              <span
                  className="absolute bottom-8 left-2 text-black text-8xl font-bold flex items-center justify-center"
                  style={{
                      WebkitTextStroke: "1px white",
                      textStroke: "1px white",
                  }}
              >
                  {index + 1}
              </span>
          </div>
          <div className="text-white text-center mt-2">{movie.title}</div>
      </div>
  );
};
 export default MovieCard;
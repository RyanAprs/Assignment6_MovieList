const Movie = ({ movie }) => {
  return (
    <div className="flex flex-col gap-2">
      <img
        className="object-cover w-full h-96 rounded"
        src={movie.Poster}
        alt={movie.Title}
      />
      <h1 className="text-lg text-white">{movie.Title}</h1>
    </div>
  );
};

export default Movie;

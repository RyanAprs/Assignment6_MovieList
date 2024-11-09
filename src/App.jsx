import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header";
import Movie from "./components/Movie";
import SearchComponent from "./components/Search";

const VITE_OMDB_API_KEY = import.meta.env.VITE_OMDB_API_KEY;

const App = () => {
  const [query, setQuery] = useState("");
  const movies = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const fetchMovies = async (query) => {
    try {
      setLoading(true);
      const url = query
        ? `https://www.omdbapi.com/?s=${query}&apikey=${VITE_OMDB_API_KEY}`
        : `http://www.omdbapi.com/?s=movie&apikey=${VITE_OMDB_API_KEY}`;

      const response = await fetch(url);
      const data = await response.json();

      if (data.Search) {
        setLoading(false);
        dispatch({ type: "INSERT_MOVIE", payload: data.Search });
      } else {
        setLoading(false);
        dispatch({ type: "INSERT_MOVIE", payload: [] });
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    fetchMovies(query);
  }, [query]);

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
  };

  if (loading) {
    return (
      <div className="bg-mainColor text-secondColor min-h-screen max-h-fit flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-mainColor text-secondColor min-h-screen max-h-fit">
      <div className="flex flex-col sm:flex-row justify-between items-center py-6 px-10 shadow-xl gap-4 sm:gap-0">
        <Header title="MovieApp" />
        <SearchComponent onSearch={handleSearch} />
      </div>
      <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-1 gap-7 p-10">
        {movies.length > 0 ? (
          movies.map((movie) => <Movie key={movie.imdbID} movie={movie} />)
        ) : (
          <p>No movies found.</p>
        )}
      </div>
    </div>
  );
};

export default App;

import { useEffect, useState } from "react";
import "./Search.css";
import axios from "axios";
import config from './config.json';
const Search = () => {
  const MOVIE_API = "https://api.themoviedb.org/3/";
  const SEARCH_API = MOVIE_API + "search/movie";
  const API_KEY = config.apiKey;
  const DISCOVER_API = `${MOVIE_API}discover/movie`;

  const [discoverResults, setDiscoverResults] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [showSearchResults, setShowSearchResults] = useState(false);

  useEffect(() => {
    fetchMovies(DISCOVER_API, setDiscoverResults);
  }, []);

  const fetchMovies = async (apiUrl, setResults) => {
    const { data } = await axios.get(apiUrl, {
      params: {
        api_key: API_KEY,
      },
    });

    setResults(data.results);
    setShowSearchResults(false);
  };

  const handleSearch = async (event) => {
    event.preventDefault();

    if (searchKey) {
      const { data } = await axios.get(SEARCH_API, {
        params: {
          api_key: API_KEY,
          query: searchKey,
        },
      });

      setSearchResults(data.results);
      setShowSearchResults(true);
    } else {
      setShowSearchResults(false);
    }
  };

  return (
    <div className="Search">
      <header className="center-max-size header">
        <span className={"brand"}>Movie Trailer App</span>
        <form className="form" onSubmit={handleSearch}>
          <input
            className="search"
            type="text"
            id="search"
            value={searchKey}
            onChange={(event) => setSearchKey(event.target.value)}
          />
          <button className="submit-search" type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </header>
      <main>
        <div className={"center-max-size container"}>
          <div className="grid">
            {showSearchResults
              ? searchResults.length > 0
                ? searchResults.map((movie) => (
                    <div key={movie.id} className="movie">
                      {movie.poster_path && (
                        <img
                          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                          alt={movie.title}
                          className="poster"
                        />
                      )}
                    </div>
                  ))
                : <p>Sorry, no movies found</p>
              : discoverResults.length > 0
              ? discoverResults.map((movie) => (
                  <div key={movie.id} className="movie">
                    {movie.poster_path && (
                      <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        className="poster"
                      />
                    )}
                  </div>
                ))
              : <p>Loading...</p>}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Search;

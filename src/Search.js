import React, { useEffect, useState } from "react";
import "./Search.css";
import config from './config.json';
// import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';

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
    try {
      const response = await fetch(`${apiUrl}?api_key=${API_KEY}`);
      const data = await response.json();
      setResults(data.results);
      setShowSearchResults(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle error state here if needed
    }
  };

  const handleSearch = async (event) => {
    event.preventDefault();

    if (searchKey) {
      try {
        const response = await fetch(`${SEARCH_API}?api_key=${API_KEY}&query=${searchKey}`);
        const data = await response.json();
        setSearchResults(data.results);
        setShowSearchResults(true);
      } catch (error) {
        console.error('Error fetching search results:', error);
        // Handle error state here if needed
      }
    } else {
      setShowSearchResults(false);
    }
  };
  const handleSearchIconClick = () => {
    if (searchKey) {
      console.log('Searching for:', searchKey); // Debug: Check if the search key is being captured
      handleSearch();
    }
  };

  return (
    <div className="Search">
      <div className="Searchbar">
      <Paper
        component="form"
        className="form"
        onSubmit={handleSearch}
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          maxWidth: '600px',
          margin: '0 auto', // Center the form horizontally
          padding: '5px',
        }}
      >
        <InputBase
          sx={{
            flex: 1,
            mr: 1,
            fontSize: '1.1rem',
          }}
          placeholder="Search"
          inputProps={{ 'aria-label': 'search' }}
          value={searchKey}
          onChange={(event) => setSearchKey(event.target.value)}
        />
        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search" onClick={handleSearch}>
          <SearchIcon />
        </IconButton>
      </Paper>
      </div>
      {/* <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
      >
        <IconButton sx={{ p: '10px' }} aria-label="menu">
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search"
          inputProps={{ 'aria-label': 'search google maps' }}
        />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={handleSearchIconClick}>
          <SearchIcon />
        </IconButton>
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions"> 
        </IconButton>
      </Paper> */}

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

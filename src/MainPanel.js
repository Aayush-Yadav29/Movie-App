import React, { useEffect, useState } from 'react';
import ItemsPanel from './ItemsPanel';
import './MainPanel.css';
import Categories from './Categories';
import Watchlist from './Watchlist';
import config from './config.json';

const MainPanel = () => {
  // Fetching and storing movies
  const [popularMovies, setPopularMovies] = useState([]);
  const [topGrossing, setTopGrossing] = useState([]);
  const [topVoted, setTopVoted] = useState([]);
  const [horrorMovies, setHorrorMovies] = useState([]);
  const [comedyMovies, setComedyMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const baseUrl = 'https://api.themoviedb.org/3/discover/movie';
      const apiKey = config.apiKey;
      const categories = ['popularity', 'revenue', 'vote_count'];

      try {
        const responses = await Promise.all(
          categories.map((category) =>
            fetch(`${baseUrl}?api_key=${apiKey}&sort_by=${category}.desc&page=1`)
          )
        );

        const results = await Promise.all(
          responses.map((response) => response.json())
        );

        setPopularMovies(results[0].results);
        setTopGrossing(results[1].results);
        setTopVoted(results[2].results);

        // Fetch movies by genre (Horror)
        const horrorGenreId = 27; // Replace with the genre ID for Horror (you can find genre IDs in TMDB documentation)
        const horrorResponse = await fetch(
          `${baseUrl}?api_key=${apiKey}&with_genres=${horrorGenreId}&page=1`
        );
        const horrorResult = await horrorResponse.json();
        setHorrorMovies(horrorResult.results);

        // Fetch movies by genre (Comedy)
        const comedyGenreId = 35; // Replace with the genre ID for Comedy (you can find genre IDs in TMDB documentation)
        const comedyResponse = await fetch(
          `${baseUrl}?api_key=${apiKey}&with_genres=${comedyGenreId}&page=1`
        );
        const comedyResult = await comedyResponse.json();
        setComedyMovies(comedyResult.results);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchMovies();
  }, []);

  // Rest of the code remains the same...
  // implement watchlist
  const[watchlist, Setwatchlist] = useState([]);

  function addTowatchlist(movie){
    Setwatchlist([...watchlist,
      {...movie, id : movie.length+1}  // Append the new todo to the existing todos array
    ]);
    console.log(watchlist);
    // const newList = [...watchlist, movie];
    // Setwatchlist(newList);
  }
 
  return (
    <div className="MainPanel">
      {/* Existing components */}
      <ItemsPanel category="Popular" moviesArray={popularMovies} handlewatchlist={addTowatchlist} key="pop" />
      <Categories />
      <ItemsPanel category="Highest Grossing" moviesArray={topGrossing} handlewatchlist={addTowatchlist} key="gross" />
      <ItemsPanel category="Highly Rated" moviesArray={topVoted} handlewatchlist={addTowatchlist} key="rate" />
      
      {/* New components for horror and comedy movies */}
      <ItemsPanel category="Horror" moviesArray={horrorMovies} handlewatchlist={addTowatchlist}  key="horror" />
      <ItemsPanel category="Comedy" moviesArray={comedyMovies} handlewatchlist={addTowatchlist} key="comedy" />
      {/* <Watchlist moviesArray={watchlist} /> */}
    </div>
  );
};

export default MainPanel;

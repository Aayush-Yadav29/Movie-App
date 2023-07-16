import React, { useEffect, useState } from 'react';
import ItemsPanel from './ItemsPanel';
import './MainPanel.css';
import Categories from './Categories';
import Watchlist from './Watchlist';
import config from './config.json';
const MainPanel = () => {
  // fetching and storing movies
  const [popularMovies, setPopularMovies] = useState([]);
  const [topGrossing, settopGrossing] = useState([]);
  const [topVoted, settopVoted] = useState([]);

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
        settopGrossing(results[1].results);
        settopVoted(results[2].results);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchMovies();
  }, []);

  // implement watchlist
  const[watchlist, Setwatchlist] = useState([]);

  function addTowatchlist(movie){
    Setwatchlist([...watchlist,
      {...movie, id : movie.length+1}  // Append the new todo to the existing todos array
    ]);
    // const newList = [...watchlist, movie];
    // Setwatchlist(newList);
  }
  return (
    <div className="MainPanel">
      <ItemsPanel category="Popular" moviesArray={popularMovies} handlewatchlist={addTowatchlist} key="pop" />
      <Categories />
      <ItemsPanel category="Highest Grossing" moviesArray={topGrossing} handlewatchlist={addTowatchlist} key="gross" />
      <ItemsPanel category="Higly Rated" moviesArray={topVoted} handlewatchlist={addTowatchlist} key="rate" />
      <Watchlist moviesArray={watchlist}/>

    </div>
  );
};

export default MainPanel;

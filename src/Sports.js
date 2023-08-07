import React, { useEffect, useState } from 'react';
import ItemsPanel from './ItemsPanel';
import config from './config.json';
import './Sports.css';
const Sports = () => {
    // Fetching and storing movies
  const [cricket, setCricket] = useState([]);
  const [football, setFootball] = useState([]);
  const [chess, setChess] = useState([]);
  const [basketball, setBasketball] = useState([]);
  const [soccer, setSoccer] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const baseUrl = 'https://api.themoviedb.org/3/search/multi';
      const apiKey = config.apiKey;
      const categories = ['cricket', 'football', 'chess','basketball','soccer'];

      try {
        const responses = await Promise.all(
          categories.map((category) =>
            fetch(`${baseUrl}?api_key=${apiKey}&query=${category}`)
          )
        );

        const results = await Promise.all(
          responses.map((response) => response.json())
        );

        setCricket(results[0].results);
        setFootball(results[1].results);
        setChess(results[2].results);
        setBasketball(results[3].results);
        setSoccer(results[4].results);
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
        <div className="Sports">
            <ItemsPanel category="Cricket" moviesArray={cricket} handlewatchlist={addTowatchlist}/>
            <ItemsPanel category="Football" moviesArray={football} handlewatchlist={addTowatchlist}/>
            <ItemsPanel category="Chess" moviesArray={chess} handlewatchlist={addTowatchlist}/>
            <ItemsPanel category="Basketball" moviesArray={basketball} handlewatchlist={addTowatchlist}/>
            <ItemsPanel category="Soccer" moviesArray={soccer} handlewatchlist={addTowatchlist}/>
        </div>
    );
}
 
export default Sports;
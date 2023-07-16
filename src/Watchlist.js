import React from 'react';
import Item from './Item';
import './Watchlist.css';

const Watchlist = ({moviesArray, handlewatchlist }) => {

  return (
    <div className="ItemsPanel">
      <div className="category">Watchlist</div>
      <div className="slider">
        {moviesArray.map((movie) => (
            <Item key={movie.id} movieInfo={movie} handlewatchlist={handlewatchlist} />
        ))}
      </div>
    </div>
  );
};


export default Watchlist;

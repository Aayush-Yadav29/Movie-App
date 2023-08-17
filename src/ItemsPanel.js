import React from 'react';
import Item from './Item';
import './ItemsPanel.css';

const ItemsPanel = ({ category, moviesArray, handlewatchlist }) => {
  const maxItems = 15;

  // Filter out movies with null poster paths
  const validMovies = moviesArray.filter((movie) => movie.poster_path !== null && movie.poster_path !== undefined);

  return (
    <div className="main">
      <div className="category">{category}</div>
      <div className="ItemsPanel">
        <div className="slider">
          {validMovies.slice(0, maxItems).map((movie) => (
            <Item key={movie.id} movieInfo={movie} handlewatchlist={handlewatchlist} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemsPanel;

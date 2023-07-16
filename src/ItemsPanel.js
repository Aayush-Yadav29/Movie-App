import React from 'react';
import Item from './Item';
import './ItemsPanel.css';

const ItemsPanel = ({ category, moviesArray, handlewatchlist }) => {
  
  const maxItems = 15;

  return (
    <div className="ItemsPanel">
      <div className="category">{category}</div>
      <div className="slider">
        {moviesArray.slice(0, maxItems).map((movie) => (
          <Item key={movie.id} movieInfo={movie} handlewatchlist={handlewatchlist} />
        ))}
      </div>
    </div>
  );
};


export default ItemsPanel;

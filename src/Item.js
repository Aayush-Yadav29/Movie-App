// import React, { useState } from 'react';
import './Item.css';
import { Link } from "react-router-dom";
const Item = ({ movieInfo, handlewatchlist}) => {
  // console.log(movieInfo.backdrop_path);
  
  return (
    <div className="Item">
      <div className="Item-content">
        <div className="Item-image">
          <img src={`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`} alt="" />
        </div>
        <div className="Item-details">
          <Link to={`/MainPanel/${movieInfo.id}`}>
              <button className="WatchNowButton">Watch Now</button>
          </Link>
          {/* <button className="PlusButton" onClick={handlewatchlist}>+</button> */}
        </div>
      </div>
    </div>
  );
}; 

export default Item;

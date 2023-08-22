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
        <Link to={`/MainPanel/${movieInfo.id}`}>
        <div className="Item-details">
            Watch Now
              {/* <button className="WatchNowButton">Watch Now</button> */}
          {/* <button className="PlusButton" onClick={handlewatchlist}>+</button> */}
        </div>
        </Link>
      </div>
    </div>
  );
}; 

export default Item;

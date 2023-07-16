import React from 'react';
import './Categories.css';
import disney from './images/viewers-disney.png';
import pixar from './images/viewers-pixar.png';
import marvel from './images/viewers-marvel.png';
import starwars from './images/viewers-starwars.png';
import natgeo from './images/viewers-national.png';
import specials from './images/specials.png';
import disneyVideo from './videos/disney.mp4';
import marvelVideo from './videos/marvel.mp4';
import natgeoVideo from './videos/national-geographic.mp4';
import pixarVideo from './videos/pixar.mp4';
import specailsVideo from './videos/specials.mp4';
import starwarsVideo from './videos/star-wars.mp4';
const Categories = () => {
  return (
    <div className="Categories">
      <div className="box disney">
        <img src={disney} alt="" />
        <video className="background-video" loop muted autoPlay>
          <source src={disneyVideo} type="video/mp4" />
        </video>
      </div>
      <div className="box pixar">
        <img src={pixar} alt="" />
        <video className="background-video" loop muted autoPlay>
          <source src={pixarVideo} type="video/mp4" />
        </video>
      </div>
      <div className="box marvel">
        <img src={marvel} alt="" />
        <video className="background-video" loop muted autoPlay>
          <source src={marvelVideo} type="video/mp4" />
        </video>
      </div>
      <div className="box starwars">
        <img src={starwars} alt="" />
        <video className="background-video" loop muted autoPlay>
          <source src={starwarsVideo} type="video/mp4" />
        </video>
      </div>
      <div className="box natgeo">
        <img src={natgeo} alt="" />
        <video className="background-video" loop muted autoPlay>
          <source src={natgeoVideo} type="video/mp4" />
        </video>
      </div>
      <div className="box specials">
        <img src={specials} alt="" />
        <video className="background-video" loop muted autoPlay>
          <source src={specailsVideo} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Categories;

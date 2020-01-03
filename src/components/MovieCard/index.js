import React from "react";
import { Link } from "react-router-dom";

import "./card.css";

import MoviesCardImage from "../Images/moviesCover.jpg";
const MoviesCard = props => {
  return (
    <Link to="/movie" className="movies_card">
      <div className="movies_card--wapper">
        <img src={MoviesCardImage} className="movies_card--image" />
        <div className="movies_card--detail">
          <p className="movies_card--rating">7/10</p>
          <p className="movies_card--genre">Action</p>
          <p className="movies_card--genre">Adventure</p>
          <input className="movies_card--btn" value="View Detail"/>
        </div>
      </div>
      <h6 className="movies_card--title">The Social Network</h6>
      <p className="movies_card--year">2019</p>
    </Link>
  );
};

export default MoviesCard;

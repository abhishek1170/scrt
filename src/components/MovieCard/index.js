import React from "react";
import { Link } from "react-router-dom";

const MoviesCard = ({ movie = {} }) => {
  let {
    vote_count,
    id,
    genre_ids,
    poster_path,
    title,
    vote_average,
    release_date
  } = movie;
  const imgSrc = `https://image.tmdb.org/t/p/w342/${poster_path}`;

  return (
    <Link
      to={{
        pathname: "/movie",
        search: `?title=${title}`,
        state: { id }
      }}
      className="movies_card"
    >
      <div className="movies_card--wapper">
        <img src={imgSrc} className="movies_card--image" />
        <div className="movies_card--detail">
          <p className="movies_card--rating">{vote_average}/10</p>
          <p className="movies_card--genre">Action</p>
          <p className="movies_card--genre">Adventure</p>
          <p className="movies_card--btn">View Detail</p>
        </div>
      </div>
      <h6 className="movies_card--title">{title}</h6>
      <p className="movies_card--year">
        {new Date(release_date).getFullYear()}
      </p>
    </Link>
  );
};

export default MoviesCard;

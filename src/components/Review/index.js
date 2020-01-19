import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Review = () => {
  let author = "ISanT";
  let rating = 7;
  let ratingHeading = "Good But Not Amazing";
  let review =
    "Rating 7.2/10 Maleficent not a bad movie but it certainly isn't one of Disney's best. Good acting performance by Michelle Pfeiffer a.k.a Queen Ingrith. She really did it. I really like acting by Anjelina Jolie as well. She is perfect in the role. If you like fairytale movie, you will enjoy maleficent.";
  return (
    <div className="reviews border-bottom-light">
      <p className="reviews_by">
        Reviewed by <span className="reviews_by--author">{author}</span>
        <span className="reviews_by--rating">
          <FontAwesomeIcon className="reviews_by--icon" icon="star" />
          {rating}/10
        </span>
      </p>
      <p className="reviews_heading">{ratingHeading}</p>
      <p className="reviews_paragraph">{review}</p>
    </div>
  );
};

export default Review;

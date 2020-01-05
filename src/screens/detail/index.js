import React from "react";
// import "./detail.css";

import MoviesCardImage from "../../Images/moviesCover.jpg";
import MoviesCover from "../../Images/medium-cover.jpg";
import MovieScreenShot1 from "../../Images/medium-screenshot1.jpg";
import MovieScreenShot2 from "../../Images/medium-screenshot2.jpg";
import MovieScreenShot3 from "../../Images/medium-screenshot3.jpg";
import MovieBackground from "../../Images/background.jpg";

class MovieDetail extends React.Component {
  render() {
    return (
      <div className="detail">
        <div className="detail_main">
          <div className="detail_main--poster">
            <img className="detail_main--poster_image" src={MoviesCover} />
            <div className="detail_main--poster_download">
              {/* <img className="detail_main--poster_pic" /> */}
              <span className="detail_main--poster_title"> Download</span>
            </div>
          </div>
          <div className="detail_main--outfit">
            <div className="detail_title">The Boy and the Beast</div>
            <div className="detail_year">2015</div>
            <div className="detail_genre">
              Action / Adventure / Animation / Fantasy
            </div>
            <div className="detail_quality">
              <p className="detail_quality--title">
                <i>Available in:</i>
              </p>
              <div className="detail_quality--download">720p.BluRay</div>
              <div className="detail_quality--download">1080p.BluRay</div>
              <div className="detail_quality--download">720p.BluRay</div>
              <div className="detail_quality--download">1080p.BluRay</div>
              <div className="detail_quality--download">1080p.BluRay</div>
              <div className="detail_quality--download">1080p.BluRay</div>
              <div className="detail_quality--download">1080p.BluRay</div>
              <div className="detail_quality--download">1080p.BluRay</div>
            </div>
            <div className="detail_rating">
              <div className="detail_rating--like"></div>
              <div className="detail_rating--critics"></div>
              <div className="detail_rating--tomato"></div>
              <div className="detail_rating--imdb"></div>
            </div>
          </div>
          <div className="detail_main--rec">
            <p className="detail_rec--title">Similar Movies</p>
            <div className="detail_rec--images">
              <img className="detail_rec--images1" src={MoviesCardImage} />
              <img className="detail_rec--images2" src={MoviesCardImage} />
              <img className="detail_rec--images3" src={MoviesCardImage} />
              <img className="detail_rec--images4" src={MoviesCardImage} />
            </div>
          </div>
        </div>
        <div className="detail_video"></div>
        <div className="detail-images">
          <img className="detail_images--image1" src={MovieScreenShot1} />
          <img className="detail_images--image2" src={MovieScreenShot2} />
          <img className="detail_images--image3" src={MovieScreenShot3} />
        </div>
        <div className="detail_about">
          <div className="detail_about-left">
            <div className="detail_about-title">Synopsis</div>
            <p className="detail_about-desc">
              The latest feature film from award-winning Japanese director
              Mamoru Hosoda (Summer Wars, Wolf Children): When Kyuta, a young
              orphan living on the streets of Shibuya, stumbles into a fantastic
              world of beasts, he's taken in by Kumatetsu, a gruff,
              rough-around-the-edges warrior beast who's been searching for the
              perfect apprentice. Despite their constant bickering, Kyuta and
              Kumatetsu begin training together and slowly form a bond as
              surrogate father and son. But when a deep darkness threatens to
              throw the human and beast worlds into chaos, the strong bond
              between this unlikely family will be put to ultimate test-a final
              showdown that will only be won if the two can finally work
              together using all of their combined strength and courage.
            </p>
            <div className="detail_about-parent"></div>
          </div>
          <div className="detail-about-right">
            <img src="" alt="" className="detail_about-avatar"/>
          </div>
        </div>
        <div className="detail-download"></div>
        <div className="detail-comment"></div>
      </div>
    );
  }
}

export default MovieDetail;

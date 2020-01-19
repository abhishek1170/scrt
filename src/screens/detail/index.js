import React from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Avatar from "../../components/Avatars";
import TabDownload from "../../components/TabDownload";
import Review from "../../components/Review";
import Comment from "../../components/Comment";

import {
  PosterOne,
  posterSecond,
  MovieScreenShot1,
  MovieScreenShot2,
  MovieScreenShot3,
  VideoTop,
  VideoLeft,
  VideoRight
} from "../../Images/images";

let detailBackgroundImage = url => ({
  backgroundImage: `linear-gradient(transparent, #171717),url(${url})`
});
class MovieDetail extends React.Component {
  state = {
    backdrop_path: null,
    id: {},
    genres: {},
    original_title: null,
    overview: null,
    popularity: {},
    poster_path: null,
    release_date: new Date(),
    tagline: {},
    vote_average: {},
    vote_count: {},
    similar: [],
    director: {},
    cast: []
  };
  storeMovies = data => {
    let {
      backdrop_path,
      id,
      genres,
      original_title,
      overview,
      popularity,
      poster_path,
      release_date,
      tagline,
      vote_average,
      vote_count,
      credits: { cast: [cast1, cast2, cast3, cast4] = [], crew = [] } = {},
      similar: { results: [similar0, similar1, similar2, similar3] = [] } = {}
    } = data;

    let director = crew.reduce(
      (dirc, data) => (data && data.department === "Directing" && data) || dirc,
      {}
    );
    let movie = {
      backdrop_path,
      id,
      genres,
      original_title,
      overview,
      popularity,
      poster_path,
      release_date,
      tagline,
      vote_average,
      vote_count,
      cast: [cast1, cast2, cast3, cast4],
      director,
      similar: [similar0, similar1, similar2, similar3]
    };
    this.setState(movie);
  };

  render() {
    const backgroundImageSrc =
      this.state.backdrop_path &&
      `https://image.tmdb.org/t/p/w342/${this.state.backdrop_path}`;
    const imgSrc =
      this.state.poster_path &&
      `https://image.tmdb.org/t/p/w342/${this.state.poster_path}`;
    const imgSrc1 =
      this.state.similar &&
      this.state.similar.length &&
      this.state.similar[0] &&
      `https://image.tmdb.org/t/p/w342/${this.state.similar[0].poster_path}`;
    const imgSrc2 =
      this.state.similar &&
      this.state.similar.length &&
      this.state.similar[1] &&
      `https://image.tmdb.org/t/p/w342/${this.state.similar[1].poster_path}`;
    const imgSrc3 =
      this.state.similar &&
      this.state.similar.length &&
      this.state.similar[2] &&
      `https://image.tmdb.org/t/p/w342/${this.state.similar[2].poster_path}`;
    const imgSrc4 =
      this.state.similar &&
      this.state.similar.length &&
      this.state.similar[3] &&
      `https://image.tmdb.org/t/p/w342/${this.state.similar[3].poster_path}`;
    const title = this.state.original_title;

    return (
      <div className="detail">
        <div
          className="detail_main_backgroundImage"
          style={detailBackgroundImage(backgroundImageSrc)}
        />
        <div className="detail_main">
          <div className="detail_main--poster">
            <img className="detail_main--poster_image" src={imgSrc} />
            <div className="detail_main--poster_download">
              {/* <img className="detail_main--poster_pic" /> */}
              <span className="detail_main--poster_title"> Download</span>
            </div>
          </div>
          <div className="detail_main--outfit">
            <div className="detail_title">{title}</div>
            <div className="detail_year">
              {this.state.release_date &&
                new Date(this.state.release_date).getFullYear()}
            </div>
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
              <img className="detail_rec--images_1" src={imgSrc1} />
              <img className="detail_rec--images_1" src={imgSrc2} />
              <img className="detail_rec--images_1" src={imgSrc3} />
              <img className="detail_rec--images_1" src={imgSrc4} />
            </div>
          </div>
        </div>
        <div className="detail_video">
          <div className="detail_video--center" />
          <div className="detail_video--loading" />
          <img className="detail_video--top" src={VideoTop} />
          <img className="detail_video--left" src={VideoLeft} />
          <img className="detail_video--right" src={VideoRight} />
        </div>
        <div className="detail-images">
          <img className="detail_images--image1" src={MovieScreenShot1} />
          <img className="detail_images--image2" src={MovieScreenShot2} />
          <img className="detail_images--image3" src={MovieScreenShot3} />
        </div>
        <div className="detail_about">
          <div className="detail_about_left">
            <div className="detail_about_heading">Synopsis</div>
            <p className="detail_about_left--desc">{this.state.overview}</p>
            <a className="detail_about_left--parent">Parental Guide</a>
            <p className="detail_about_left--italic">
              Uploaded By:<span>FREEMAN</span>
            </p>
            <p className="detail_about_left--italic">
              January 01, 2020 at 07:13 AM
            </p>
          </div>
          <div className="detail_about_right">
            <div>
              <div className="detail_about_heading">Director</div>
              <Avatar avatar={this.state.director} />
            </div>
            <div>
              <div className="detail_about_heading">Cast</div>
              {this.state.cast.map(data => (
                <Avatar avatar={data} />
              ))}
            </div>
          </div>
        </div>
        <div className="detail_download">
          <TabDownload />
        </div>
        <div className="detail-comment">
          <div className="detail-comment_left">
            <div className="detail-comment_title">
              <FontAwesomeIcon
                className="detail-comment_title--icon"
                icon="star"
              />
              <span className="detail-comment_title--name">Movie Reviews</span>
            </div>
            <Review />
            <Review />
            <Review />
            <Review />
            <p style={{
              textAlign:"right",
              fontSize:"1.2rem",
              fontWeight:"bolder",
              margin:"2rem 0",
              color:"#919191"
            }}>Read more IMDb reviews</p>
          </div>
          <div className="detail-comment_right">
            <div className="detail-comment_title">
              <FontAwesomeIcon
                className="detail-comment_title--icon"
                icon="comment-alt"
                style={{ transform: "rotateY(180deg)" }}
              />
              <i className="detail-comment_title--count">184 </i>
              <span className="detail-comment_title--name">Comments</span>
            </div>
            <Comment />
            <div
              className="comment"
              style={{
                marginTop: "1.5rem"
              }}
            >
              <div className="comment-box">
                <div
                  className="comment-box__load-comment"
                  style={{
                    background: "none",
                    fontSize: "1.6rem",
                    padding: "0"
                  }}
                >
                  Login to leave more comment
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    let { id } =
      (this.props && this.props.location && this.props.location.state) || {};
    let apiUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&append_to_response=videos,images,similar,credits,reviews`;

    axios(apiUrl)
      .then(
        response => response && response.data && this.storeMovies(response.data)
      )
      .catch(error => console.log(error));
  }
}

export default MovieDetail;

import React from "react";
import axios from "axios";
import MoviesCard from "../../components/MovieCard";

class Main extends React.Component {
  state = {
    background_image:null,
    treading_movies: [],
    latest_movies_one: [],
    latest_movies_second: [],
    upcoming_movies: []
  };

  storeMovies = data => {
    const movies = data.results.reduce(
      (states, data, index) => {
        let {
          vote_count,
          id,
          genre_ids,
          poster_path,
          title,
          vote_average,
          release_date
        } = data;

        let obj = {
          vote_count,
          id,
          genre_ids,
          poster_path,
          title,
          vote_average,
          release_date
        };
        if (index < 4) {
          states.treading_movies.push(obj);
        } else if (4 <= index && index < 8) {
          states.latest_movies_one.push(obj);
        } else if (8 <= index && index < 12) {
          states.latest_movies_second.push(obj);
        } else {
          states.upcoming_movies.push(obj);
        }
        return states
      },
      {
        treading_movies: [],
        latest_movies_one: [],
        latest_movies_second: [],
        upcoming_movies: []
      }
    );

    this.setState(movies);
  };

  render() {
    return (
      <main className="main">
        <section className="treading">
          <div className="treading_background" />
          <div className="treading_movies">
            <div className="treading_heading">
              <h1 className="treading_heading--primary">
                Download YTS YIFY movies: HD smallest size
              </h1>
              <h6 className="treading_heading--secondary">
                Welcome to the official YTS.LT website. Here you will be able to
                browse and download YIFY movies in excellent 720p, 1080p and 3D
                quality, all at the smallest file size. Only here: YTS Movies
                Torrents.
              </h6>
              <div className="treading__heading--title">Popular Downloads</div>
            </div>
            <div className="main_movies">
              {this.state.treading_movies.map((movie={}) => (
                <MoviesCard key={movie.id} movie={movie} />
              ))}
            </div>
          </div>
        </section>
        <section className="latest">
          <div>
            <div className="main_heading">
              <h3>Latest YIFY Movies Torrents</h3>
              <input className="main_btn" type="button" value="Browser All" />
            </div>
            <div className="main_movies">
              {this.state.latest_movies_one.map((movie={}) => (
                <MoviesCard key={movie.id} movie={movie}/>
              ))}
            </div>
            <div className="main_movies">
            {this.state.latest_movies_second.map((movie={}) => (
                <MoviesCard key={movie.id} movie={movie}/>
              ))}
            </div>
          </div>
        </section>
        <section className="upcoming">
          <div>
            <div className="main_heading">
              <h3>Upcomming YIFY Movies Torrents</h3>
              <input
                className="main_btn"
                type="button"
                value="Request a Movies"
              />
            </div>
            <div className="main_movies">
            {this.state.upcoming_movies.map((movie={}) => (
                <MoviesCard key={movie.id} movie={movie}/>
              ))}
            </div>
          </div>
        </section>
      </main>
    );
  }

  componentDidMount() {
    let apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;

    axios(apiUrl)
      .then(
        response => response && response.data && this.storeMovies(response.data)
      )
      .catch(error => console.log(error));
  }
}

export default Main;

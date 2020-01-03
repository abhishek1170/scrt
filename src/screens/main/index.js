import React from "react";

import "./main.css";

import MoviesCard from "../MovieCard";

class Main extends React.Component {
  render() {
    return (
      <main className="main">
        <section className="treading">
          <div className="treading_background"/>
          <div className="treading_movies">
            <div className="treading_heading">
              <h1 className="treading_heading--primary">Download YTS YIFY movies: HD smallest size</h1>
              <h6 className="treading_heading--secondary">
                Welcome to the official YTS.LT website. Here you will be able to
                browse and download YIFY movies in excellent 720p, 1080p and 3D
                quality, all at the smallest file size. Only here: YTS Movies
                Torrents.
              </h6>
              <div className="treading__heading--title">
                  Popular Downloads
              </div>
            </div>
            <div className="main_movies">
              <MoviesCard />
              <MoviesCard />
              <MoviesCard />
              <MoviesCard />
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
              <MoviesCard />
              <MoviesCard />
              <MoviesCard />
              <MoviesCard />
            </div>
            <div className="main_movies">
              <MoviesCard />
              <MoviesCard />
              <MoviesCard />
              <MoviesCard />
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
              <MoviesCard />
              <MoviesCard />
              <MoviesCard />
              <MoviesCard />
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default Main;

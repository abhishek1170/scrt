import React from "react";
import axios from "axios";

import MoviesCard from "../../components/MovieCard";
import Pagination from "../../components/Pagination";

class Browse extends React.Component {
  state = {
    movies: []
  };

  storeMovies = data => {
    const movies = data.results.map((data, index) => {
      let {
        vote_count,
        id,
        genre_ids,
        poster_path,
        title,
        vote_average,
        release_date
      } = data;
      return {
        vote_count,
        id,
        genre_ids,
        poster_path,
        title,
        vote_average,
        release_date
      };
    });
    this.setState({ movies });
  };

  render() {
    return (
      <div class="browse">
        <div class="browse-filter">
          <div class="browse-filter--wraper">
            <div class="browse-search">
              <label for="browseSearchId" class="browse_search--heading--pri">
                Search Term :
              </label>
              <input
                id="browseSearchId"
                class="browse_search--input"
                type="text"
              />
            </div>
            <div class="browse-drops">
              <div>
                <label for="qualityId" class="browse_search--heading">
                  Quality :
                </label>
                <select class="browse_drops--select">
                  <option value="volvo">All</option>
                  <option value="saab">Alphabets</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
                </select>
              </div>
              <div>
                <label for="genreId" class="browse_search--heading">
                  Genre :
                </label>
                <select class="browse_drops--select">
                  <option value="volvo">All</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
                </select>
              </div>
              <div>
                <label for="ratingId" class="browse_search--heading">
                  Rating :
                </label>
                <select class="browse_drops--select">
                  <option value="volvo">All</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
                </select>
              </div>
              <div>
                <label for="orderById" class="browse_search--heading">
                  Order By :
                </label>
                <select class="browse_drops--select">
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
                </select>
              </div>
            </div>
          </div>
          <input type="button" class="browse_search--btn" value="Search" />
        </div>
        <div class="browse-movies">
          <p class="browse-movies--result">14,131 YIFY Movies Found</p>
          <Pagination />
          <div class="browse-movies--movies">
            {
              this.state.movies.map((movie={})=><MoviesCard key={movie.id} movie={movie}/>)
            }
          </div>
          <Pagination />
        </div>
      </div>
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

export default Browse;

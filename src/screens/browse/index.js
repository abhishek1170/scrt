import React from "react";

import MoviesCard from "../../components/MovieCard";

class Browse extends React.Component {
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
          <div class="browse-movies--movies">
            <MoviesCard/>
            <MoviesCard/>
            <MoviesCard/>
            <MoviesCard/>
            <MoviesCard/>
            <MoviesCard/>
            <MoviesCard/>
            <MoviesCard/>
            <MoviesCard/>
            <MoviesCard/>
            <MoviesCard/>
            <MoviesCard/>
            <MoviesCard/>
            <MoviesCard/>
            <MoviesCard/>
            <MoviesCard/>
            <MoviesCard/>
            <MoviesCard/>
            <MoviesCard/>
            <MoviesCard/>
          </div>
        </div>
      </div>
    );
  }
}

export default Browse;

import React from "react";

import "./main.css";

import MoviesCard from "../MovieCard";

class Main extends React.Component {
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
          <div class="pagination">
            <input name="first" type="button" value="<< First" />
            <input name="previous" type="button" value="<< Previous" />
            <input name="" type="button" value="1" />
            <input name="" type="button" value="2" />
            <input name="" type="button" value="..." />
            <input name="" type="button" value="15" />
            <input name="" type="button" value="16" />
            <input name="" type="button" value="17" />
            <input name="" type="button" value="18" />
            <input name="" type="button" value="19" />
            <input name="" type="button" value="20" />
            <input name="" type="button" value="..." />
            <input name="" type="button" value="700" />
            <input name="" type="button" value="701" />
            <input name="next" type="button" value="Next >>" />
            <input name="last" type="button" value="Last >>" />
          </div>

          <div class="browse-movies--movies">
            <a class="movies_card" href="/movie">
              <div class="movies_card--wapper">
                <img
                  src="/static/media/moviesCover.f61ddfd6.jpg"
                  class="movies_card--image"
                />
                <div class="movies_card--detail">
                  <p class="movies_card--rating">7/10</p>
                  <p class="movies_card--genre">Action</p>
                  <p class="movies_card--genre">Adventure</p>
                  <input class="movies_card--btn" value="View Detail" />
                </div>
              </div>
              <h6 class="movies_card--title">The Social Network</h6>
              <p class="movies_card--year">2019</p>
            </a>
            <a class="movies_card" href="/movie">
              <div class="movies_card--wapper">
                <img
                  src="/static/media/moviesCover.f61ddfd6.jpg"
                  class="movies_card--image"
                />
                <div class="movies_card--detail">
                  <p class="movies_card--rating">7/10</p>
                  <p class="movies_card--genre">Action</p>
                  <p class="movies_card--genre">Adventure</p>

                  <input class="movies_card--btn" value="View Detail" />
                </div>
              </div>
              <h6 class="movies_card--title">The Social Network</h6>

              <p class="movies_card--year">2019</p>
            </a>
            <a class="movies_card" href="/movie">
              <div class="movies_card--wapper">
                <img
                  src="/static/media/moviesCover.f61ddfd6.jpg"
                  class="movies_card--image"
                />
                <div class="movies_card--detail">
                  <p class="movies_card--rating">7/10</p>
                  <p class="movies_card--genre">Action</p>
                  <p class="movies_card--genre">Adventure</p>
                  <input class="movies_card--btn" value="View Detail" />
                </div>
              </div>
              <h6 class="movies_card--title">The Social Network</h6>
              <p class="movies_card--year">2019</p>
            </a>
            <a class="movies_card" href="/movie">
              <div class="movies_card--wapper">
                <img
                  src="/static/media/moviesCover.f61ddfd6.jpg"
                  class="movies_card--image"
                />
                <div class="movies_card--detail">
                  <p class="movies_card--rating">7/10</p>
                  <p class="movies_card--genre">Action</p>
                  <p class="movies_card--genre">Adventure</p>
                  <input class="movies_card--btn" value="View Detail" />
                </div>
              </div>
              <h6 class="movies_card--title">The Social Network</h6>
              <p class="movies_card--year">2019</p>
            </a>
            <a class="movies_card" href="/movie">
              <div class="movies_card--wapper">
                <img
                  src="/static/media/moviesCover.f61ddfd6.jpg"
                  class="movies_card--image"
                />
                <div class="movies_card--detail">
                  <p class="movies_card--rating">7/10</p>
                  <p class="movies_card--genre">Action</p>
                  <p class="movies_card--genre">Adventure</p>
                  <input class="movies_card--btn" value="View Detail" />
                </div>
              </div>
              <h6 class="movies_card--title">The Social Network</h6>
              <p class="movies_card--year">2019</p>
            </a>
            <a class="movies_card" href="/movie">
              <div class="movies_card--wapper">
                <img
                  src="/static/media/moviesCover.f61ddfd6.jpg"
                  class="movies_card--image"
                />
                <div class="movies_card--detail">
                  <p class="movies_card--rating">7/10</p>
                  <p class="movies_card--genre">Action</p>
                  <p class="movies_card--genre">Adventure</p>
                  <input class="movies_card--btn" value="View Detail" />
                </div>
              </div>
              <h6 class="movies_card--title">The Social Network</h6>
              <p class="movies_card--year">2019</p>
            </a>
            <a class="movies_card" href="/movie">
              <div class="movies_card--wapper">
                <img
                  src="/static/media/moviesCover.f61ddfd6.jpg"
                  class="movies_card--image"
                />
                <div class="movies_card--detail">
                  <p class="movies_card--rating">7/10</p>
                  <p class="movies_card--genre">Action</p>
                  <p class="movies_card--genre">Adventure</p>
                  <input class="movies_card--btn" value="View Detail" />
                </div>
              </div>
              <h6 class="movies_card--title">The Social Network</h6>
              <p class="movies_card--year">2019</p>
            </a>
            <a class="movies_card" href="/movie">
              <div class="movies_card--wapper">
                <img
                  src="/static/media/moviesCover.f61ddfd6.jpg"
                  class="movies_card--image"
                />
                <div class="movies_card--detail">
                  <p class="movies_card--rating">7/10</p>
                  <p class="movies_card--genre">Action</p>
                  <p class="movies_card--genre">Adventure</p>
                  <input class="movies_card--btn" value="View Detail" />
                </div>
              </div>
              <h6 class="movies_card--title">The Social Network</h6>
              <p class="movies_card--year">2019</p>
            </a>
            <a class="movies_card" href="/movie">
              <div class="movies_card--wapper">
                <img
                  src="/static/media/moviesCover.f61ddfd6.jpg"
                  class="movies_card--image"
                />
                <div class="movies_card--detail">
                  <p class="movies_card--rating">7/10</p>
                  <p class="movies_card--genre">Action</p>
                  <p class="movies_card--genre">Adventure</p>
                  <input class="movies_card--btn" value="View Detail" />
                </div>
              </div>
              <h6 class="movies_card--title">The Social Network</h6>
              <p class="movies_card--year">2019</p>
            </a>
            <a class="movies_card" href="/movie">
              <div class="movies_card--wapper">
                <img
                  src="/static/media/moviesCover.f61ddfd6.jpg"
                  class="movies_card--image"
                />
                <div class="movies_card--detail">
                  <p class="movies_card--rating">7/10</p>
                  <p class="movies_card--genre">Action</p>
                  <p class="movies_card--genre">Adventure</p>
                  <input class="movies_card--btn" value="View Detail" />
                </div>
              </div>
              <h6 class="movies_card--title">The Social Network</h6>
              <p class="movies_card--year">2019</p>
            </a>
            <a class="movies_card" href="/movie">
              <div class="movies_card--wapper">
                <img
                  src="/static/media/moviesCover.f61ddfd6.jpg"
                  class="movies_card--image"
                />
                <div class="movies_card--detail">
                  <p class="movies_card--rating">7/10</p>
                  <p class="movies_card--genre">Action</p>
                  <p class="movies_card--genre">Adventure</p>
                  <input class="movies_card--btn" value="View Detail" />
                </div>
              </div>
              <h6 class="movies_card--title">The Social Network</h6>
              <p class="movies_card--year">2019</p>
            </a>
            <a class="movies_card" href="/movie">
              <div class="movies_card--wapper">
                <img
                  src="/static/media/moviesCover.f61ddfd6.jpg"
                  class="movies_card--image"
                />
                <div class="movies_card--detail">
                  <p class="movies_card--rating">7/10</p>
                  <p class="movies_card--genre">Action</p>
                  <p
                    class="movies_card--genre"
                  >
                    Adventure
                  </p>
                  <input class="movies_card--btn" value="View Detail" />
                </div>
              </div>
              <h6 class="movies_card--title">The Social Network</h6>
              <p class="movies_card--year">2019</p>
            </a>
            <a class="movies_card" href="/movie">
              <div
                class="movies_card--wapper"
              >
                <img
                  src="/static/media/moviesCover.f61ddfd6.jpg"
                  class="movies_card--image"
                />
                <div class="movies_card--detail">
                  <p class="movies_card--rating">7/10</p>
                  <p class="movies_card--genre">Action</p>
                  <p class="movies_card--genre">Adventure</p>
                  <input class="movies_card--btn" value="View Detail" />
                </div>
              </div>
              <h6 class="movies_card--title">The Social Network</h6>
              <p class="movies_card--year">2019</p>
            </a>
            <a class="movies_card" href="/movie">
              <div class="movies_card--wapper">
                <img
                  src="/static/media/moviesCover.f61ddfd6.jpg"
                  class="movies_card--image"
                />
                <div class="movies_card--detail">
                  <p class="movies_card--rating">7/10</p>
                  <p class="movies_card--genre">Action</p>
                  <p class="movies_card--genre">Adventure</p>
                  <input class="movies_card--btn" value="View Detail" />
                </div>
              </div>
              <h6 class="movies_card--title">The Social Network</h6>
              <p class="movies_card--year">2019</p>
            </a>
            <a class="movies_card" href="/movie">
              <div class="movies_card--wapper">
                <img
                  src="/static/media/moviesCover.f61ddfd6.jpg"
                  class="movies_card--image"
                />
                <div class="movies_card--detail">
                  <p class="movies_card--rating">7/10</p>
                  <p class="movies_card--genre">Action</p>
                  <p class="movies_card--genre">Adventure</p>
                  <input class="movies_card--btn" value="View Detail" />
                </div>
              </div>
              <h6 class="movies_card--title">The Social Network</h6>
              <p class="movies_card--year">2019</p>
            </a>
            <a class="movies_card" href="/movie">
              <div class="movies_card--wapper">
                <img
                  src="/static/media/moviesCover.f61ddfd6.jpg"
                  class="movies_card--image"
                />
                <div class="movies_card--detail">
                  <p class="movies_card--rating">7/10</p>
                  <p class="movies_card--genre">Action</p>
                  <p class="movies_card--genre">Adventure</p>
                  <input class="movies_card--btn" value="View Detail" />
                </div>
              </div>
              <h6 class="movies_card--title">The Social Network</h6>
              <p class="movies_card--year">2019</p>
            </a>
            <a class="movies_card" href="/movie">
              <div class="movies_card--wapper">
                <img
                  src="/static/media/moviesCover.f61ddfd6.jpg"
                  class="movies_card--image"
                />
                <div class="movies_card--detail">
                  <p class="movies_card--rating">7/10</p>
                  <p class="movies_card--genre">Action</p>
                  <p class="movies_card--genre">Adventure</p>
                  <input class="movies_card--btn" value="View Detail" />
                </div>
              </div>
              <h6 class="movies_card--title">The Social Network</h6>
              <p class="movies_card--year">2019</p>
            </a>
            <a class="movies_card" href="/movie">
              <div class="movies_card--wapper">
                <img
                  src="/static/media/moviesCover.f61ddfd6.jpg"
                  class="movies_card--image"
                />
                <div class="movies_card--detail">
                  <p class="movies_card--rating">7/10</p>
                  <p class="movies_card--genre">Action</p>
                  <p class="movies_card--genre">Adventure</p>
                  <input class="movies_card--btn" value="View Detail" />
                </div>
              </div>
              <h6 class="movies_card--title">The Social Network</h6>
              <p class="movies_card--year">2019</p>
            </a>
            <a class="movies_card" href="/movie">
              <div class="movies_card--wapper">
                <img
                  src="/static/media/moviesCover.f61ddfd6.jpg"
                  class="movies_card--image"
                />
                <div class="movies_card--detail">
                  <p class="movies_card--rating">7/10</p>
                  <p class="movies_card--genre">Action</p>
                  <p class="movies_card--genre">Adventure</p>
                  <input class="movies_card--btn" value="View Detail" />
                </div>
              </div>
              <h6 class="movies_card--title">The Social Network</h6>
              <p class="movies_card--year">2019</p>
            </a>
            <a class="movies_card" href="/movie">
              <div class="movies_card--wapper">
                <img
                  src="/static/media/moviesCover.f61ddfd6.jpg"
                  class="movies_card--image"
                />
                <div class="movies_card--detail">
                  <p class="movies_card--rating">7/10</p>
                  <p class="movies_card--genre">Action</p>
                  <p class="movies_card--genre">Adventure</p>
                  <input class="movies_card--btn" value="View Detail" />
                </div>
              </div>
              <h6 class="movies_card--title">The Social Network</h6>
              <p class="movies_card--year">2019</p>
            </a>
          </div>
          <div class="pagination">
            <input name="first" type="button" value="<< First" />
            <input name="previous" type="button" value="<< Previous" />
            <input name="" type="button" value="1" />
            <input name="" type="button" value="2" />
            <input name="" type="button" value="..." />
            <input name="" type="button" value="15" />
            <input name="" type="button" value="16" />
            <input name="" type="button" value="17" />
            <input name="" type="button" value="18" />
            <input name="" type="button" value="19" />
            <input name="" type="button" value="20" />
            <input name="" type="button" value="..." />
            <input name="" type="button" value="700" />
            <input name="" type="button" value="701" />
            <input name="next" type="button" value="Next >>" />
            <input name="last" type="button" value="Last >>" />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;

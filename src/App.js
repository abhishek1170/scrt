import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.scss";

import Header from "./Header";
import Main from "./Main";
import Browse from "./Browse";
import MovieDetail from "./MovieDetail";
import Footer from "./Footer";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/movie">
            <MovieDetail />
          </Route>
          <Route path="/browse">
            <Browse />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;

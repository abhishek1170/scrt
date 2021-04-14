// modules
import React from "react";
import { Switch, Route } from "react-router-dom";

// css
import "./App.scss";


// components
import Header from "./components/Header";
import Footer from "./components/Footer";

// screens
import Main from "./screens/main";
import Browse from "./screens/browse";
import Detail from "./screens/detail";


class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route path="/movie">
            <Detail />
          </Route>
          <Route path="/browse">
            <Browse />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;

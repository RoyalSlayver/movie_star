import React from "react";
import { Switch, Route } from "react-router-dom";
import App from "../App/App";
import MovieList from "../MovieList/MovieList";
import Favorite from "../Favorite/Favorite";

export default class Main extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/Favorite" component={Favorite} />
        <Route exact path="/MovieList" component={MovieList} />
        <Route path="/" component={App} />
      </Switch>
    );
  }
}

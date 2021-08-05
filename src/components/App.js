import React, { Component } from "react";
import { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";

import { navRoutes } from "../routes/navRoutes";

import Header from "./header/Header";

const HomePage = lazy(() =>
  import("../pages/HomePage.js" /* webpackChunkName: "home-page" */)
);

const MovieDetailsPage = lazy(() =>
  import(
    "../pages/MovieDetailsPage.js" /* webpackChunkName: "movie-details-page" */
  )
);

const MoviesPage = lazy(() =>
  import("../pages/MoviesPage.js" /* webpackChunkName: "books-view" */)
);

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <Header />
        <Suspense fallback={<h1>Loading...</h1>}>
          <Switch>
            <Route exact path={navRoutes.home} component={HomePage} />
            <Route
              path={navRoutes.moviesDetails}
              component={MovieDetailsPage}
            />
            <Route exact path={navRoutes.movies} component={MoviesPage} />
          </Switch>
        </Suspense>
      </>
    );
  }
}

export default App;

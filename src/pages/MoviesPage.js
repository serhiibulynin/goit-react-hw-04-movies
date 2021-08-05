import React, { Component } from "react";

import MoviesList from "../components/movieList/MovieList";
import Searchbar from "../components/searchBar/SearchBar";
import { fetchMoviesByQuery } from "../services/api";
import queryString from "query-string";

class MoviesPage extends Component {
  state = {
    searchQuery: "",
    movies: [],
  };

  async componentDidMount() {
    try {
      const queryParams = queryString.parse(this.props.location.search);
      const { query } = queryParams;
      if (query) {
        const response = await fetchMoviesByQuery(query);
        console.log(`response`, response);
        this.setState({ movies: [...response], searchQuery: query });
      }
    } catch (error) {
      console.log(`error`, error);
    }
  }

  handleSubmit = (query) => {
    if (query) {
      fetchMoviesByQuery(query).then((response) =>
        this.setState({ movies: [...response], searchQuery: query })
      );
      this.props.history.push({
        pathname: this.props.location.pathname,
        search: `query=${query}`,
      });
    }
  };
  render() {
    const { movies, searchQuery } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        {movies && <MoviesList movies={movies} query={searchQuery} />}
      </>
    );
  }
}
export default MoviesPage;

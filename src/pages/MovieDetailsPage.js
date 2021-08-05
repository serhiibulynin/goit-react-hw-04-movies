import React, { Component } from "react";
import styles from "../components/searchBar/SearchBar.module.css";
import { fetchMovieById } from "../services/api";

import MovieDetails from "../components/movieDetails/MovieDetails";
import { navRoutes } from "../routes/navRoutes";

class MovieDetailsPage extends Component {
  state = {
    movie: {},
  };
  async componentDidMount() {
    try {
      const movieId = this.props.match.params.movieId;
      const response = await fetchMovieById(movieId);
      this.setState({ movie: response });
    } catch (error) {
      console.log(`error`, error);
    }
  }

  handleGoBack = () => {
    const { location, history } = this.props;

    history.push(location?.state?.from || navRoutes.home);
  };

  render() {
    const { movie } = this.state;
    const movieId = this.props.match.params.movieId || "";

    return (
      <div className="container">
        <button type={styles.button} onClick={this.handleGoBack}>
          Go back
        </button>
        {movie.id && <MovieDetails movie={movie} movieId={movieId} />}
      </div>
    );
  }
}

export default MovieDetailsPage;

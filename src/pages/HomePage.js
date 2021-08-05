import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "../components/movieList/MovieList.module.css";
import { fetchPopularMovies } from "../services/api";

class HomePage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    try {
      const response = await fetchPopularMovies();
      this.setState({ movies: [...response] });
    } catch (error) {
      throw new Error(error);
    }
  }

  render() {
    return (
      <>
        <h1>Trending today</h1>;
        <ul className={styles.movieList}>
          {this.state.movies.map((movie) => (
            <li className={styles.movieListItem} key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.original_title}</Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default HomePage;

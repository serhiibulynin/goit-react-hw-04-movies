import React from "react";
import { Link, withRouter } from "react-router-dom";
import styles from "./MovieList.module.css";

const MovieList = ({ movies, match, location, query }) => {
  return (
    <ul className={styles.movieList}>
      {movies.map((movie) => (
        <li className={styles.movieListItem} key={movie.id}>
          <Link
            className={styles.movieListItemLink}
            to={{
              pathname: `${match.url}/${movie.id}`,
              state: { from: location, query },
            }}
          >
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default withRouter(MovieList);

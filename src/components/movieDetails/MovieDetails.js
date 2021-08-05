import React from "react";
import Cast from "../cast/Cast";
import Reviews from "../reviews/Reviews";
import { Link, Route, Switch, withRouter } from "react-router-dom";
import styles from "./MovieDetails.module.css";
import { detailsRoutes } from "../../routes/detailsRoutes";

const MovieDetails = ({ movie, movieId }) => {
  return (
    <>
      <div className={styles.wrapper}>
        <img
          src={`
                  https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`}
          alt={movie.original_title}
          className={styles.movieImg}
        />
        <div>
          <h2 className={styles.movieTitle}>
            {movie.original_title} ({Number.parseInt(movie.release_date)})
          </h2>
          <p className={styles.movieSubtitle}>
            User Score: {movie.vote_average * 10}%
          </p>
          <h3 className={styles.movieSubtitle}>Overview</h3>
          <p className={styles.movieOverview}>{movie.overview}</p>
          <h3 className={styles.movieSubtitle}>Genres</h3>
          <ul className={styles.movieGenreList}>
            {movie.genres.map((genre) => (
              <li className={styles.detailsItem} key={genre.id}>
                {genre.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <p className={styles.movieSubtitle}>Additional information</p>
        <Link className={styles.movieLink} to={`/movies/${movieId}/reviews`}>
          Reviews
        </Link>
        <Link className={styles.movieLink} to={`/movies/${movieId}/cast`}>
          Cast
        </Link>
      </div>
      <Switch>
        <Route path={detailsRoutes.cast} exact component={Cast} />
        <Route path={detailsRoutes.reviews} exact component={Reviews} />
      </Switch>
    </>
  );
};

export default withRouter(MovieDetails);

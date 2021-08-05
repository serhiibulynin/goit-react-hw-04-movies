import React, { Component } from "react";
import { fetchMovieCast } from "../../services/api";
import defaultImg from "../../images/default.jpg";
import styles from "./Cast.module.css";

class Cast extends Component {
  state = {
    actors: [],
  };

  async componentDidMount() {
    try {
      const movieId = this.props.match.params.id;
      const response = await fetchMovieCast(movieId);
      this.setState({ actors: [...response] });
    } catch (error) {
      console.log(`error`, error);
    }
  }

  render() {
    const { actors } = this.state;
    console.log(`actors`, actors);
    return (
      <div>
        {actors.length ? (
          <ul className={styles.castList}>
            {actors.map(({ id, profile_path, name }) => (
              <li className={styles.castItem} key={id}>
                <img
                  className={styles.castImg}
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w300${profile_path}`
                      : defaultImg
                  }
                  alt={name}
                />
                <h2 className={styles.castTitle}>{name}</h2>
              </li>
            ))}
          </ul>
        ) : (
          <h2 className={styles.castTitle}>Page not found </h2>
        )}
      </div>
    );
  }
}

export default Cast;

import React, { Component } from "react";
import { fetchMovieReviews } from "../../services/api";
import styles from "./Reviews.module.css";

class Reviews extends Component {
  state = {
    reviews: [],
  };

  async componentDidMount() {
    try {
      const movieId = this.props.match.params.id;
      const response = await fetchMovieReviews(movieId);
      this.setState({ reviews: [...response] });
    } catch (error) {
      console.log(`error`, error);
    }
  }

  render() {
    const { reviews } = this.state;
    return (
      <div>
        {reviews.length ? (
          <ul className={styles.reviewList}>
            {reviews.map((review) => (
              <li className={styles.reviewItem} key={review.author}>
                <h2 className={styles.reviewTitle}>{review.author}</h2>
                <p className={styles.reviewText}>{review.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <h2 className={styles.reviewTitle}>
            We don't have any reviews for this movie.
          </h2>
        )}
      </div>
    );
  }
}

export default Reviews;

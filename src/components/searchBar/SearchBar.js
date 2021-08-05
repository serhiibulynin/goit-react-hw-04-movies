import React, { Component } from "react";
import styles from "./SearchBar.module.css";

class SearchBar extends Component {
  state = {
    query: "",
  };

  handleChange = (e) => {
    this.setState({ query: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit} className={styles.form}>
          <input
            className={styles.input}
            type="text"
            value={this.state.query}
            autoComplete="off"
            placeholder="Enter movie"
            onChange={this.handleChange}
          />
          <button type="submit" className={styles.button}>
            Search
          </button>
        </form>
      </>
    );
  }
}

export default SearchBar;

import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
const API_KEY = "a270cdf6cdb8b60438fe81cf5da8eacf";

export const fetchPopularMovies = async () => {
  try {
    return await axios
      .get(`trending/movie/day?api_key=${API_KEY}`)
      .then((res) => res.data.results);
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchMovieById = async (movieId) => {
  try {
    return await axios
      .get(`movie/${movieId}?api_key=${API_KEY}`)
      .then((res) => res.data);
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchMovieCast = async (movieId) => {
  try {
    return await axios
      .get(`movie/${movieId}/credits?api_key=${API_KEY}`)
      .then((res) => res.data.cast);
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchMovieReviews = async (movieId) => {
  try {
    return await axios
      .get(`movie/${movieId}/reviews?api_key=${API_KEY}`)
      .then((res) => res.data.results);
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchMoviesByQuery = async (query) => {
  try {
    return await axios
      .get(`search/movie?api_key=${API_KEY}&query=${query}`)
      .then((res) => res.data.results);
  } catch (error) {
    console.log(error);
  }
};

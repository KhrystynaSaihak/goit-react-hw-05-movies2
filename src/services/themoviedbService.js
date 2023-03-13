import Axios from 'axios';

export const IMG_URL = 'https://image.tmdb.org/t/p/w500';

const API_KEY = '2b316c342fe13f9049052886494c29f1';
const URL = 'https://api.themoviedb.org/';

const getTrendingMovies = async () => {
  const { data } = await Axios.get(
    `${URL}3/trending/movie/day?api_key=${API_KEY}`
  );
  return data;
};

const getMovieById = async movie_id => {
  const { data } = await Axios.get(
    `${URL}3/movie/${movie_id}?api_key=${API_KEY}`
  );
  return data;
};

const getMovieCast = async movie_id => {
  const { data } = await Axios.get(
    `${URL}3/movie/${movie_id}/credits?api_key=${API_KEY}`
  );
  return data;
};

const getMovieReviews = async movie_id => {
  const { data } = await Axios.get(
    `${URL}3/movie/${movie_id}/reviews?api_key=${API_KEY}`
  );
  return data;
};

const searchMovie = async query => {
  const { data } = await Axios.get(
    `${URL}3/search/movie?api_key=${API_KEY}&query=${query}`
  );
  return data;
};

export {
  getTrendingMovies,
  getMovieById,
  getMovieCast,
  getMovieReviews,
  searchMovie,
};

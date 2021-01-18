import axios from 'axios';

export const searchMovies = (query) => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const URL = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&language=en-US`
  return axios.get(URL)
}

export const popularMovies = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
  return axios.get(URL)
}

export const getMovieDetail = (id) => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
  return axios.get(URL)
}

export const getWatchProvider = (id) => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const URL = `https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=${apiKey}`;
  return axios.get(URL)
}
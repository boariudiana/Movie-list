import { TextField, Button } from '@material-ui/core';
import React, { useState } from 'react';
import { searchMovies } from '../shared/API';
import styles from './SearchBox.module.css';
import MovieList from "../MovieList/MovieList"


const SearchBox = (props) => {
  const [term, setTerm] = useState('');
  const [movies, setMovies] = useState([]);

  const localMovieAdd = (movie) => {
    setMovies([]);
    props.onMovieAdd(movie);
  };

  return (
    <div className = {styles.main}>
      <TextField
        variant="outlined"
        label="Search for a movie"
        value={term}
        onChange={(e) => {
          setTerm(e.target.value);
        }}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
          searchMovies(term).then((res) => setMovies(res.data.results))
          }
        }
      }
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() =>
          searchMovies(term).then((res) => setMovies(res.data.results))
        }
      >
        Search
      </Button>
      <MovieList movies={movies}
           onMovieAdd={localMovieAdd} />
    </div>
  );
};

export default SearchBox;
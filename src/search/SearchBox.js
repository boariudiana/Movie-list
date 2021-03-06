import React, { useEffect, useState , useRef} from "react";
import { searchMovies } from "../shared/API";
import styles from "./SearchBox.module.css";
import MovieList from "../MovieList/MovieList";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import {withRouter} from 'react-router-dom'


const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF",
  }
})(Typography);

const SearchBox = (props) => {
  const inputRef = useRef(null)
  
  useEffect(()=>{
    inputRef.current.focus()
  })

  const [term, setTerm] = useState("");
  const [movies, setMovies] = useState([]);

  const localMovieAdd = (movie) => {
    setMovies([]);
    props.onMovieAdd(movie);
  };

  const handleSelectedMovie = (id) => {
    props.history.push( '/movies/' + id );
}

  return (
    <div >
      <div className={styles.main}>
        <div >
        <WhiteTextTypography variant="h2" align = "left">Welcome.</WhiteTextTypography>
        <WhiteTextTypography variant="h5" align = "left">Millions of movies, TV shows and people to discover. Explore now</WhiteTextTypography>
        </div>
        <div className = {styles.search_container}>
        <input
          ref = {inputRef}
          className={styles.Input}
          placeholder = "Search for a movie..."
          type="text"
          label="Search for a movie"
          value={term}
          onChange={(e) => {
            setTerm(e.target.value);
          }}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              searchMovies(term).then((res) => setMovies(res.data.results));
            }
          }}
        />
        <button
          className = {styles.btn_grad}
          onClick={() =>
            searchMovies(term).then((res) => setMovies(res.data.results))
          }
        >
          Search
        </button>
        </div>
      </div>
      <MovieList 
              movies={movies} 
              onMovieAdd={localMovieAdd} 
              savedMovies = {props.savedMovies}
              onClickedMovie = {handleSelectedMovie}/>

    </div>
  );
};

export default withRouter(SearchBox);

import React from "react";
import { Button, Paper, Grid, Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import styles from "./MovieList.module.css";
import {useMediaQuery} from '@material-ui/core'
import theme from '../../src/theme'

const MovieList = (props) => {

  const matches = useMediaQuery(theme.breakpoints.up("md"));


  return (
    <div className={styles.box}>
      <ul className={styles.list}>
        {props.movies.map((movie) => (
          <Paper>
            <li className={styles.listItem} key={movie.id}>
              <Grid container>
                <Grid item md={6} xs={6} sm = {6}>
                  <img
                    src={`https://image.tmdb.org/t/p/w154${movie.poster_path}`}
                    alt={movie.title}
                  />
                </Grid>
                <Grid container item md={6} xs={6} sm = {6} wrap="nowrap" direction ={matches ? "row": "column"} justify= "flex-start" alignItems = "flex-start">
                  <Grid item md={12} sm = {12} xs={12} >
                    <Typography
                      variant="h6"
                      align="left"
                      color="primary"
                    >
                      {movie.title}
                    </Typography>
                    <Typography 
                       variant = "body1"
                       align= "left"
                       color = "primary"
                    >
                      ({movie.release_date})
                      </Typography>
                      {/*<Typography
                        noWrap
                         variant = "body1"
                      align= "left">{movie.overview}</Typography>*/}
                  </Grid>
                  <Grid item md={12} xs={12} sm = {12}>
                    <Button
                      className={styles.addMovie}
                      color="secondary"
                      onClick={(e) => {
                        e.preventDefault();
                        props.onMovieAdd(movie);
                      }}
                    >
                      <AddIcon /> Add movie
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </li>
          </Paper>
        ))}
      </ul>
    </div>
  );
};
export default MovieList;

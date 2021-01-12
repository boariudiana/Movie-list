import { React, useEffect, useState, } from "react";
import { popularMovies } from "../shared/API";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import theme from "../../src/theme";
import styles from "./PopularMovies.module.css"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  title: {
    color: theme.palette.primary,
  },
}));

const PopularMovies = () => {
  const classes = useStyles();
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    popularMovies().then((res) => {
      setMovies(res.data.results);
    });
  }, []);

  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <div className = {styles.layout}>
      <Typography variant="h6" color="primary" align="left">
        Most popular movies
      </Typography>
      <div className={classes.root}>
        <GridList className={classes.gridList} cols= {matches ? 6:2 } cellHeight="auto">
          {movies.map((movie) => (
            <GridListTile key={movie.poster_path}>
              <img
                src={`http://image.tmdb.org/t/p/w154/${movie.poster_path}`}
                alt={movie.title}
              />
              <GridListTileBar
                title={movie.title}
                classes={{
                  title: classes.title,
                }}
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </div>
  );
};

export default PopularMovies;

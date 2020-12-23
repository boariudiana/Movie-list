import React  from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import styles from './SavedMovies.module.css'
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from "@material-ui/core/styles";
import MovieRaiting from '../MovieRaiting/MovieRaiting'
import Grid from '@material-ui/core/Grid'
import {useMediaQuery} from '@material-ui/core'
import theme from '../../src/theme'


const useStyles = makeStyles((theme) => ({
  
  avatar: {
    backgroundColor: '#032541'
  }
}));

const MovieItem = (props) => {

  const classes = useStyles();
  const movie = props.movie
  const imgUrl = `https://image.tmdb.org/t/p/w300${movie.poster_path}`

  return (
        <li className={styles.movie_item}>
       <Grid item xs = {12} sm = {12} md = {12} lg= {12} xl = {12}> 
       <Card className={styles.root}>
       <CardHeader
        avatar={
          <Avatar alt="vote-range" src="" className={classes.avatar}>
          {movie.vote_average}
          </Avatar>
        }
        title={movie.title}
        subheader={movie.release_date}
      />
      <CardActionArea>
        <CardMedia
          className={styles.media}
          image={imgUrl}
          title={movie.title}
        />
        
      </CardActionArea>
      <CardActions  className={styles.cardActions}>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<DeleteIcon />}
        onClick={() => props.onMovieDelete(movie.id)}
      >
        Delete
      </Button>
      <MovieRaiting
       movie = {movie}/>
      </CardActions>
    </Card> 
        </Grid> 
    </li>
    
  )
}

 const SavedMovies = (props) => {

  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <div className = {styles.movie_container}>
      {props.savedMovies && props.savedMovies.length > 0 ? (
           <ul className = {styles.container}>
             <Grid container 
             spacing = {2} 
        direction ={matches ? "row": "column"}
        justify= "center"
         alignItems = "center"
         >
          {props.savedMovies.map((movie) => (
            <MovieItem 
                    movie={movie}
                    key = {movie.id}
                    onMovieDelete={props.onMovieDelete} />
          ))}
          </Grid>
        </ul>
      ) : (
        'No saved movies'
      )}
    </div>
  )
}
export default SavedMovies;


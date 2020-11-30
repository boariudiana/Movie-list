import React from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import styles from './SavedMovies.module.css'
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import { red } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import MovieReview from '../MovieReview/MovieReview'

const useStyles = makeStyles((theme) => ({
  
  avatar: {
    backgroundColor: red[500]
  }
}));


const MovieItem = (props) => {
  
  const classes = useStyles();
  const movie = props.movie
  const imgUrl = `https://image.tmdb.org/t/p/w300${movie.poster_path}`
  return (
    <li className={styles.movie_item}>
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
      >
        Delete
      </Button>
      <MovieReview 
      movie = {movie}/>
      </CardActions>
    </Card>  
    </li>
  )
}

 const SavedMovies = (props) => {
  return (
    <div>
      {props.savedMovies && props.savedMovies.length > 0 ? (
        <ul className = {styles.container}>
          {props.savedMovies.map((movie) => (
            <MovieItem movie={movie} />
          ))}
        </ul>
      ) : (
        'No saved movies'
      )}
    </div>
  )
}
export default SavedMovies;


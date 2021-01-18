import React from 'react';
import {Paper, Grid, Typography, Button} from '@material-ui/core'
import { Component } from 'react';
import {getMovieDetail, getWatchProvider } from '../shared/API'
import styles from './FullMovie.module.css'


class FullMovie extends Component {
    state = {
        loadedMovie: null,
    }
    
    redirectHandler  (id) {
        //make request to getwarchProviders
        getWatchProvider(id)
           .then(response => {
             console.log (response.data.results)
             if(response.data.results.US){
                 const url = response.data.results.US.link;
                 window.location.replace(url)
             }else {
                alert("No providers were found for this movie")
             }

           })
    }

    componentDidMount () {
        //console.log(this.props)
        if ( this.props.match.params.id ) {
            if ( !this.state.loadedMovie || (this.state.loadedMovie && this.state.loadedMovie.id !== this.props.match.params.id) ) {
                getMovieDetail(this.props.match.params.id)
                    .then( response => {
                         console.log(response.data);
                        this.setState( { loadedMovie: response.data } );
                    } );
            }   
        }
    }


    render () {
        let movie = <p style={{ textAlign: 'center' }}>Please select a Movie!</p>;
        if (this.props.match.params.id ) {
         movie = <p style={{ textAlign: 'center' }}>Loading...!</p>;
        }
        if ( this.state.loadedMovie || this.state.watchProvider) {
            movie = (
                <Paper key = {this.state.loadedMovie.id}>
                  <Grid container >
                        <Grid item md={4} xs={6} sm = {5} align = "left">
                        <img
                            src={this.state.loadedMovie.poster_path 
                                ?`https://image.tmdb.org/t/p/w154${this.state.loadedMovie.poster_path}`:
                                'https://i.imgur.com/Z2MYNbj.png/large_movie_poster.png'}
                            alt={this.state.loadedMovie.title}
        
                        />
                        </Grid>
                        <Grid   container item 
                            md={8} xs={6} sm = {7} 
                            direction ="row"
                            justify= "flex-start"
                            alignItems = "flex-start"
                            >
                        <Grid item md={12} sm = {12} xs={12} lg = {12} xl = {12} >
                            <Typography 
                            variant="h6"
                            align="left"
                            color="primary"
                            >
                            {this.state.loadedMovie.title}
                            </Typography>
                            <Typography 
                            variant = "body1"
                            align= "left"
                            color = "initial"
                            
                            >
                            ({this.state.loadedMovie.overview})
                            </Typography>
                            <Typography 
                               noWrap
                                className = {styles.overview}
                                variant = "body1"
                                align= "left">{movie.overview}</Typography>
                        </Grid> 
                        <Grid>
                                    <Button onClick = {() => this.redirectHandler(this.state.loadedMovie.id)}>Get Watch providers</Button>
                        </Grid>
                        </Grid>
                  </Grid>
              </Paper>

            );
        }
        return movie
    }
}

export default FullMovie;
import React from 'react'
import './App.css';
import Header from './shared/Header'
import SearchBox from './search/SearchBox'
import SavedMovies from './SavedMovies/SavedMovies'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../src/theme'


class App extends React.Component {

  constructor(props) {
    super(props)
    const movies = JSON.parse(window.localStorage.getItem('saved-movies'))
    if (movies && Array.isArray(movies)) {
      this.state = {
        movies,
      }
    } else {
      this.state = {
        movies: [],
      }
    }
  }

handleAddMovie = (movie)=>{
  // const dublicateMovieCheck =this.state.movies.filter(item => (item.id === movie.id)).length > 0;
  //   if(dublicateMovieCheck){
  //     return;
  //   }
  
  const movies = this.state.movies
 
    this.setState(
      {
        movies: [...movies, movie],
      },
      () => {
        window.localStorage.setItem(
          'saved-movies',
          JSON.stringify(this.state.movies),
        )
      },
    )
  }
  
handleDeleteMovie = (id) => {
  this.setState ({
    movies: this.state.movies.filter (item => (item.id !== id))
  },  () => {
    window.localStorage.setItem(
      'saved-movies',
      JSON.stringify(this.state.movies),
    )
    window.localStorage.setItem(
      id,
      JSON.stringify([{ id: 0, active: false, raited:false },
        { id: 1, active: false, raited:false },
        { id: 2, active: false, raited:false },
        { id: 3, active: false, raited:false },
        { id: 4, active: false, raited:false },]),
    )
  },)
}

  render() {
  
    return (
      <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <SearchBox onMovieAdd={this.handleAddMovie} />
        <SavedMovies 
              savedMovies={this.state.movies}
              onMovieDelete={this.handleDeleteMovie}
         />
      </div>
      </ThemeProvider>
    )
  }
}

export default App
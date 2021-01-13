import React from "react";
import "./App.css";
import Header from "./shared/Header/Header";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../src/theme";
import { BrowserRouter, Switch } from "react-router-dom";
import SearchBox from "./search/SearchBox";
import SavedMovies from "./SavedMovies/SavedMovies";
import { Route, Redirect } from "react-router-dom";
import { Fragment } from "react";
import PopularMovies from "./PopularMovies/PopularMovies";


class App extends React.Component {
  constructor(props) {
    super(props);
    const movies = JSON.parse(window.localStorage.getItem("saved-movies"));
    if (movies && Array.isArray(movies)) {
      this.state = {
        movies,
      };
    } else {
      this.state = {
        movies: [],
      };
    }
  }
  
  handleAddMovie = (movie) => {
    const movies = this.state.movies;
  
    this.setState(
      {
        movies: [...movies, movie],
      },
      () => {
        window.localStorage.setItem(
          "saved-movies",
          JSON.stringify(this.state.movies)
        );
      }
    );
  };

  handleDeleteMovie = (id) => {
    this.setState(
      {
        movies: this.state.movies.filter((item) => item.id !== id),
      },
      () => {
        window.localStorage.setItem(
          "saved-movies",
          JSON.stringify(this.state.movies)
        );
        window.localStorage.setItem(
          id,
          JSON.stringify([
            { id: 0, active: false, raited: false },
            { id: 1, active: false, raited: false },
            { id: 2, active: false, raited: false },
            { id: 3, active: false, raited: false },
            { id: 4, active: false, raited: false },
          ])
        );
      }
    );

  };

  render() {
    return (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <div className="App">
            <Header />
            <Switch>
              <Route
                  exact
                  path="/Movie-list"
                  render={() => {
                      return (
                        <Redirect to="/home" /> 
                      )
                  }}
                />
              <Route
                path="/home"
                exact
                render={(props) =>(<Fragment>
                        <SearchBox onMovieAdd={this.handleAddMovie}
                                    savedMovies = {this.state.movies}/>
                        <PopularMovies />
                </Fragment>)}
              />
              <Route
                path="/my-list"
                exact
                render={(props) => (
                  <SavedMovies
                    savedMovies={this.state.movies}
                    onMovieDelete={this.handleDeleteMovie}
                  />
                )}
              />
            </Switch>
          </div>
        </ThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
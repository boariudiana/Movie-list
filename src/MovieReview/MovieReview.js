import React from "react";
import IconButton from "@material-ui/core/IconButton";
import StarIcons from "../Star/StarIcons"
class  MovieReview extends React.Component {
  constructor(props) {
    super(props)
    const review = JSON.parse(window.localStorage.getItem(props.movie.id))
    if (review && review !== null) {
      this.state = {
       review,
      }
    } else {
      this.state = {
       review :-1
      }
    }
  }

   reviewHandler = (value) => {
    this.setState({ review: value }, () => {
      window.localStorage.setItem(
        this.props.movie.id,
        JSON.stringify(this.state.review),
      )
    },);
  };

  
 render(){
  return (
    <IconButton aria-label="review">
      <span><StarIcons
         review = {this.state.review}
         handler = {this.reviewHandler}/></span>
    </IconButton>
  )}
}
export default MovieReview;

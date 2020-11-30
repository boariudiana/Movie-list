import React, { useState } from "react"
import StarIcon from '@material-ui/icons/Star';
import IconButton from '@material-ui/core/IconButton';
import { yellow } from '@material-ui/core/colors';

const MovieReview = (props) => {
   
    const[reviewState, setReview] = useState({
        review:-1
    })
    const starArr =[1, 2, 3, 4, 5]
    
    const reviewHandler = (index)=>{
         setReview({
             review : index
         }) 
    }
    let starIcons=starArr.map((item, index)=>{
        if(index<=reviewState.review ){
            return(
                <StarIcon
                onClick= {()=>reviewHandler(index)}
                key = {index}
                style={{ color: yellow[500] }}/>
            )
         }
         return(
            <StarIcon
            onClick= {()=>reviewHandler(index)}
            key = {index}
           color ="disabled"/>
         )
    })


   return(
    <IconButton aria-label="review">
    <span>
    {starIcons}
  </span>
    </IconButton>
   )
}
export default MovieReview
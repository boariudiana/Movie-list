import React from "react"
import StarIcon from "@material-ui/icons/Star"
import { yellow } from "@material-ui/core/colors";

 
 const starArr = [1, 2, 3, 4, 5];
const StarIcons = (props) =>{
    const starIcons = starArr.map((item, index) => {
        if (index <= props.review) {
          return (
            <StarIcon
              key={index}
              onClick={()=>props.handler(index)}
              style={{ color: yellow[500] }}
            />
          );
        }
        return (
          <StarIcon
            onClick={()=>props.handler(index)}
            key={index}
            color="disabled"
          />
        );
      });
      return (
          <div>{starIcons}</div>
      )

}
export default StarIcons
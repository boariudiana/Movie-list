import React, {useState} from "react";
import StarIcon from '@material-ui/icons/StarOutlined'
import styles from "./MovieRaiting.module.css"

const  MovieRaiting = (props) => {
  const handleMouseOver = (item) => {
    // console.log(item)
    // const index = ratings.findIndex((el) => el.id === item.id)
    // const items = [...ratings]
    // items[index].active = true
    // setRatings(items)
    const items = ratings.map((el, index) => {
      if (index < item.id) {
        return Object.assign({}, { ...el }, { active: true })
      }
      return Object.assign({}, { ...el }, { active: false })
    })
    setRatings(items)
  }

  const handleClick = (item) =>{
    const items = ratings.map((el, index) => {
      if (index <= item.id) {
        return Object.assign({}, {...el}, {raited: true})
      }
      return Object.assign({}, {...el}, {raited :false})
    })
    setRatings(items)
  }

  const [ratings, setRatings] = useState([
    { id: 0, active: false, raited:false },
    { id: 1, active: false, raited:false },
    { id: 2, active: false, raited:false },
    { id: 3, active: false, raited:false },
    { id: 4, active: false, raited:false },
  ])

  return (
    <span>
    {ratings.map((item, index) => {
      return (
        <StarIcon
          className={[styles.star, item.active && styles.active, item.raited && styles.raited].join(' ')}
          onMouseOver={() => handleMouseOver(item)}
          onClick = {()=>{handleClick(item)}}
        />
      )
    })}
  </span>
  )
}
export default MovieRaiting;
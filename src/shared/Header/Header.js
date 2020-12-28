import React from 'react'
import {
  AppBar,
  Toolbar,
  IconButton,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import {NavLink} from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import styles from './Header.module.css'


const Header = () => {
  return (
    <div >
       <AppBar position="static">
      <Toolbar>
      <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        <Typography variant="h6">🎥</Typography>
        <ul className = {styles.ul}>
          <li className = {styles.links}>
            <NavLink 
              to = "/"
              exact
              activeStyle = {{
                textDecoration : 'underline'
          
              }}>
            <Typography variant = "h6">Home</Typography>
            </NavLink>
          </li>
          <li className = {styles.links}>
          <NavLink 
            to = "/my-list"
              activeStyle = {{
                textDecoration : 'underline'
              }} >
            <Typography variant = "h6">My List</Typography>
            </NavLink>
          </li>
        </ul>
      </Toolbar>
    </AppBar>
    </div>
  )
}

export default Header
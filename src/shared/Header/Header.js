import React from 'react'
import {
  AppBar,
  Toolbar,
  IconButton,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom'


function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  menuButton: {
    marginRight: theme.spacing(3),
  },
}));


const Header = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div >
       <AppBar position="static">
      <Toolbar>
      <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        <img src = "logo_movie.png" alt = "movie logo" width = "50px" height = '50px'/>
        <Tabs centered  value={value} onChange={handleChange}>
        <Tab label="Home" {...a11yProps(0)} value="/" component={Link} to="/" />
        <Tab label="My List"{...a11yProps(1)} value="/my-list" component={Link} to="/my-list" />
        </Tabs>
      </Toolbar>
    </AppBar>
    </div>
  )
}

export default Header
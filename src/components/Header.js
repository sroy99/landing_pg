
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';
import HideOnScroll from "./HideOnScroll";
import  "../Header.css";



const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage : `url(${process.env.PUBLIC_URL+"/assets/pexels-leon-ardho-1552252.jpg"})`,
    minHeight: '100vh',
    backgroundRepeat : 'no-repeat',
    backgroundSize : 'cover',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Nunito',
  },
  appbar: {
    background: 'none',
  },
  appbarWrapper: {
    width: '80%',
    margin: '0 auto',
  },
  appbarTitle: {
    flexGrow: '1',
  },
  icon: {
    color: '#fff',
    fontSize: '2rem',
  },
  colorText: {
    color: '#B34180',
  },
  container: {
    textAlign: 'center',
  },
  title: {
    color: '#fff',
    fontSize: '4.5rem',
  },
  goDown: {
    color: '#B34180',
    fontSize: '4rem',
  },
}));
export default function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className={classes.root} id="header">
      <HideOnScroll>
      <AppBar className={classes.appbar} elevation={0} id="navbar" position="fixed">
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
            <span className={classes.colorText}>Trainers</span>
          </h1>
          <IconButton>
            <SortIcon className={classes.icon} />
          </IconButton>
        </Toolbar>
      </AppBar>
      </HideOnScroll>
      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.container}>
          <h1 className={classes.title}>
            Let's meet <br />
            the{' '} <span className={classes.colorText}>Instructors.</span>
          </h1>
          <Scroll to="trainers-part" smooth={true}>
            <IconButton>
              <ExpandMoreIcon className={`${classes.goDown} bounce`}/>
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </div>
  );
}

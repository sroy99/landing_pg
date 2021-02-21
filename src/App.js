import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import './App.css';
import Header from "./components/Header";
import TrainerList from "./components/TrainerList";
import ImageCard from "./components/ImageCard";

const useStyles=makeStyles((themes)=>({
  root : {
    
  }
}));

function App() {
  const classes=useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline/>
      <Header/>
      <TrainerList/>
    </div>
  );
}

export default App;

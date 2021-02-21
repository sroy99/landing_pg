import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from "./ImageCard";
import instructors from "../util";
import useWindowPosition from "../hooks/useWindowPos";

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap : 'wrap',
      flexDirection : 'row',
      alignItems: 'center',
      backgroundColor : 'black',
      minHeight: '100vh',
      backgroundRepeat : 'repeat-y',
      backgroundSize : 'cover',
    //   [theme.breakpoints.down('md')]: {
    //     flexDirection: 'column',
    //   },
    },
}));

export default function TrainerList(){
    const classes=useStyles();
    const checked=useWindowPosition("header");
    return (
        <div className={classes.root} id="trainers-part">
            {instructors.map((instructor)=>{
                return (<ImageCard instr={instructor} check={checked}/>)
            })}
            
        </div>
    );
}

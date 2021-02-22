import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import CallIcon from '@material-ui/icons/Call';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { red } from '@material-ui/core/colors';
import { withStyles } from "@material-ui/core/styles";
import Collapse from '@material-ui/core/Collapse';

const useStyles = makeStyles({
  avatar : {
    backgroundColor: 'red',
  },
  root: {
    width: 645,
    marginRight : '80px',
    marginTop : '40px',
    marginLeft : '80px',
    background : 'rgba(0,0,0,0.3)'
  },
  media: {
    height: 440,
    '&:hover': {
      transform: 'scale(1.3)',
      transition: 'transform .5s ease'
    }
  },
  cardTopHeading : {
        fontFamily : 'Nunito',
        fontWeight : '900',
        fontSize : '1.5rem',
        color : "#fff"
  },
  cardTopSubHeader : {
    fontFamily : 'Nunito',
    fontWeight : '700',
    fontSize : '1rem',
    color : "#fff"
  },
  details_list : {
    color : "#fff"
  },
});

const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF"
  }
})(Typography);

export default function ImageCard({instr,check}) {
  const classes = useStyles();

  return (
    <Collapse
        in={check}
        {...(check ? { timeout: 1500 } : {})}
        collapsedHeight={50}
      >
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={instr.imageURL}
          title="trainer"
        />
        <CardContent>
        <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {instr.title.charAt(0).toUpperCase()}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={instr.title}
        subheader={instr.subHeader}
        
        classes={{title : classes.cardTopHeading, subheader : classes.cardTopSubHeader}}
      />
          <WhiteTextTypography variant="body2" color="textSecondary" component="p">
            {instr.caption}
          </WhiteTextTypography> 
        </CardContent>
      </CardActionArea>
      <CardContent>
       
          <WhiteTextTypography paragraph>Details:</WhiteTextTypography>
          <ul>
          {instr.details.map((detail)=>{
              return (
               <li className='details_list'><WhiteTextTypography paragraph>
                 {detail}
                </WhiteTextTypography></li>
              )
          })}
          </ul>
        </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          <MailOutlineIcon/>
        </Button>
        <Button size="small" color="primary">
          <CallIcon/>
        </Button>
      </CardActions>
    </Card>
    </Collapse>
  );
}


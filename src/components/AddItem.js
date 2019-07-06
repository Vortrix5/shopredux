import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import img1 from "./add.png"


const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function AddItem(props) {
  const classes = useStyles();
  return (
    <div style={{marginTop:100, marginLeft:50, marginRight:50, display:"inline-block", width: 300}}>
    <Card className={classes.card}>
      <CardActionArea>
          <center>
          <img src={img1} width="77%" alt="img"/>
          </center>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={props.onAddItem}>
          Add item
        </Button>
      </CardActions>
    </Card>
    </div>
  );
}

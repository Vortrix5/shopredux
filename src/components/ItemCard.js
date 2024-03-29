import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function ItemCard(props) {
  const classes = useStyles();
const { el } = props
console.log( el, 'el')
  return (
    <div style={{marginTop:100, marginLeft:50, marginRight:50, display:"inline-block", width: 300}} key={props.key}>
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.src}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Typography size="small">
          ${props.price}
        </Typography>
        <Button size="small" color="primary" onClick={() => props.add (el)} disabled={props.quantity>=7}>
          Add to Cart
        </Button>
        <Button size="small" color="primary" onClick={() => props.delete (el)}>
          Delete Item
        </Button>
        <Button size="small" color="primary" onClick={() => props.edit (el)}>
          Edit Item
        </Button>
      </CardActions>
    </Card>
    </div>
  );
}

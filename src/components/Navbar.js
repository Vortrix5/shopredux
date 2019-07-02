import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import {connect} from "react-redux";


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Navbar(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="secondary">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} aria-label="Menu">
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {props.tit}
          </Typography>
          <IconButton edge="start" className={classes.menuButton} aria-label="Cart">cart
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
const mapStateToProps= state=>({
    tit : state.tit
});
export default connect(mapStateToProps)(Navbar)

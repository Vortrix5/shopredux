import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import { connect } from "react-redux";
import { Link } from "react-router-dom"
import clsx from 'clsx';
import Badge from '@material-ui/core/Badge';
import { loadCSS } from 'fg-loadcss';




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
  React.useEffect(() => {
    loadCSS(
      'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
      document.querySelector('#font-awesome-css'),
    );
  }, []);
  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="action" style={{backgroundColor:"#a2a4a6"}}>
        <Toolbar>
          <Link to="/"><Typography variant="h6" className={classes.title} style={{fontWeight:"bold", fontSize:20, fontFamily: "Sofia"}}>
            {props.tit}
          </Typography></Link>
          <Link style={{ marginLeft: "96pc" }} to="/cart"><Badge badgeContent={props.totalQuy} color="primary">
            <Icon className={clsx(classes.icon, "fab fa-opencart")} style={{ fontSize: 30, color: "#007bff" }} color="action" />
            </Badge>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
      );
    }
const mapStateToProps= state=>({
        tit : state.tit,
        totalQuy: state.totalQuantity
  });
  export default connect(mapStateToProps)(Navbar)

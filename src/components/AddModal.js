import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import AddItem from './AddItem';
import { MDBInput } from "mdbreact";


const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AddModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div style={{display: "inline-block"}}>
      <AddItem onAddItem={handleClickOpen}/>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="Close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Item Details
            </Typography>
            <Button color="inherit" onClick={handleClose}>
              Add
            </Button>
          </Toolbar>
        </AppBar>
        <div style={{paddingTop:25, width:"300px"}}>
        <MDBInput label="Product Name" />
        </div>
        <MDBInput label="Product Desciption" style={{paddingBottom:80, width:"50%"}} />
        <MDBInput label="Product Image (url)" style={{width:"50%"}} />
        <MDBInput label="Product Price" style={{ width:"10%"}} />


      </Dialog>
    </div>
  );
}
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import AddItem from './AddItem';
import { MDBInput } from "mdbreact";
import {connect} from "react-redux"


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
  return <Slide direction="left" ref={ref} {...props} />;
});

function AddModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    props.dispatch({type: "ADD_ITEM"})
    setOpen(false);
  }
  function onInput(e,name, v){
    e.preventDefault();
    props.dispatch({type: "CHANGE_ANY_STATE", state : name, value: v})
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
        <MDBInput onChange={(e)=>onInput(e,"title",e.target.value)} label="Product Name" />
        </div>
        <MDBInput onChange={(e)=>onInput(e,"desc",e.target.value)} label="Product Desciption" style={{paddingBottom:80, width:"50%"}}/>
        <MDBInput onChange={(e)=>onInput(e,"src",e.target.value)} label="Product Image (url)" style={{width:"50%"}} />
        <MDBInput onChange={(e)=>onInput(e,"price",parseInt(e.target.value))} label="Product Price" style={{ width:"10%"}} />


      </Dialog>
    </div>
  );
}
export default connect()(AddModal)
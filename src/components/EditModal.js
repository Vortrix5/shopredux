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

function EditModal(props) {
  const classes = useStyles();
  const open = props.open;
  function handleClose() {
    props.dispatch({type:"CLOSE_MODAL"})
  }
  function editItem() {   
    props.dispatch({type:"EDIT_ITEM"})
  }
  function onInput(e,name, v){
    e.preventDefault();
    props.dispatch({type: "EDIT", state : name, value: v})
  }
 

  return (
    <div style={{display: "inline-block"}}>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar} color="secondary">
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="Close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Item Details
            </Typography>
            <Button color="inherit" onClick={editItem}>
              Save changes
            </Button>
          </Toolbar>
        </AppBar>
        <div style={{paddingTop:25, width:"300px"}}>
        <MDBInput onChange={(e)=>onInput(e,"title",e.target.value)} label="Product Name" value={props.editItems.title} />
        </div>
        <MDBInput onChange={(e)=>onInput(e,"desc",e.target.value)} label="Product Desciption" value={props.editItems.desc} style={{paddingBottom:80, width:"50%"}}/>
        <MDBInput onChange={(e)=>onInput(e,"src",e.target.value)} label="Product Image (url)" value={props.editItems.src} style={{width:"50%"}} />
        <MDBInput onChange={(e)=>onInput(e,"price",parseInt(e.target.value))} label="Product Price" value={props.editItems.price} style={{ width:"10%"}} />


      </Dialog>
    </div>
  );
}
const mapStateToProps=state=>({
  open: state.open,
  editItems: state.editItem
})
export default connect(mapStateToProps)(EditModal)
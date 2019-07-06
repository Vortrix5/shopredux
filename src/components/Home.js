import React from "react";
import ItemCard from "./ItemCard";
import {connect} from "react-redux";
import AddModal from "./AddModal";
import EditModal from "./EditModal";



class Home extends React.Component{
        onAdd=(x)=>{
            this.props.dispatch({type: "ADD_TO_CART", payload : x})

        }
        onDelete=(x)=>{
            this.props.dispatch({type: "DELETE_ITEM", payload : x})

        }
        onEdit=(x)=>{
            this.props.dispatch({type: "OPEN_MODAL", payload : x})

        }
        
    render(){

     let itemL = this.props.items.map(item =>{
         return <ItemCard key={item.id} add={this.onAdd} delete={this.onDelete} edit={this.onEdit} el = {item} title={item.title} desc={item.desc} price={item.price} src={item.src} quantity={this.props.addedItems.quantity}/>
     })
    return(
        <>
        {itemL}
        <AddModal/>
        <EditModal/>
        </>
    )
    }


}
const mapStatetoProps= state=>({
    items : state.items,
    addedItems: state.addedItems
})
export default connect(mapStatetoProps)(Home);
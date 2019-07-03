import React from "react";
import ItemCard from "./ItemCard";
import {connect} from "react-redux";


class Home extends React.Component{
        onAdd=(x)=>{
            this.props.dispatch({type: "ADD_TO_CART", payload : x})
        }
    render(){

     let itemL = this.props.items.map(item =>{
         return <ItemCard key={item.id} add={this.onAdd} el = {item} title={item.title} desc={item.desc} price={item.price} src={item.src}/>
     })
    return(
        <>
        {itemL}
        </>
    )
    }


}
const mapStatetoProps= state=>({
    items : state.items
})
export default connect(mapStatetoProps)(Home);
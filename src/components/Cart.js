import React from "react"
import {connect} from "react-redux";
import CartCard from "./CartCard"
import Total from "./Total";

class Cart extends React.Component{
    onRemove=(x)=>{
        this.props.dispatch({type: "REMOVE_FROM_CART", payload : x})
    }        
    onPlus=(x)=>{
        this.props.dispatch({type: "ITEM_PLUS", payload : x})
    }        
    onSub=(x)=>{
        this.props.dispatch({type: "ITEM_SUB", payload : x})
    }

    render(){
        let itemT= this.props.addedItems.map(item =>{
          return <CartCard id={item.id} remove={this.onRemove} plus={this.onPlus} sub={this.onSub} img={item.img} el = {item} title={item.title} desc={item.desc} price={item.price} quantity={item.quantity}/>
        })
        return(
            <>
            {itemT}
            <Total total={this.props.total}/>
            </>
        )
    }
}


const mapStatetoProps= state =>({
    addedItems: state.addedItems,
    total: state.total
})

export default connect(mapStatetoProps)(Cart)

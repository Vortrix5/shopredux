import React from "react";
import ItemCard from "./ItemCard";
import {connect} from "react-redux";



class Home extends React.Component{
    render(){
     let itemL = this.props.items.map(item =>{
         return <ItemCard key={item.id} title={item.title} desc={item.desc} price={item.price} src={item.src}/>
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
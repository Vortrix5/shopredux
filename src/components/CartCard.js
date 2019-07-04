import React from "react";
import "./style.css"

export default function CartCard(props) {
    const { el } = props
    return (
        <>            <div>
                <div className="row form-group">
                    <div className="col-sm-10">
                        <h4>{props.title}: ${props.price}</h4>
                    </div>
                    <div className="col-sm-2 text-right">qty: {props.quantity}</div>
                </div>
                <div className="row btn-toolbar">
                    <div className="col-6">
                        <button className="btn btn-outline-primary" onClick={()=>props.remove(el)}>
                            remove
            </button>
                    </div>
                    <div className="col-6 text-right">
                        <button className="btn btn-outline-primary" onClick={()=>props.plus(el)} disabled={props.quantity >= 7}>
                            +1
            </button>
                        <button className="btn btn-outline-primary" onClick={()=>props.sub(el)} disabled={props.quantity <= 1}>
                            -1
            </button>
                    </div>
                </div>
            </div>
        </>
    )

}


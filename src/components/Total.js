import React from "react";

export default function Total(props) {
    let mystyle = {
        borderTop: "1px solid #ddd",
        marginTop: "10px"
      };
    let tax= props.total*0.15
    return (
        <>       <div>
                <hr />
                <div style={{"marginTop": "30px", "backgroundColor":"#F6F6F6","padding": "10px"}}>
        <h3 className="row" style={{ fontWeight: 400 }}>
          <span className="col-6">total price:</span>
          <span className="col-6 text-right">${props.total}</span>
        </h3>
        <h3 className="row" style={{ fontWeight: 400 }}>
          <span className="col-6">tax (15%):</span>
          <span className="col-6 text-right">${tax}</span>
        </h3>
        <h3 className="row" style={mystyle}>
          <span className="col-6">tota inc tax:</span>
          <span className="col-6 text-right">${props.total+tax}</span>
        </h3>

      </div>
            </div>
        </>
    )

}


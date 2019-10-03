import React from "react"
import "./ChildComponent.css"
function ChildComponent(props){
    return(
        <div className="prevstate">
            Previous Value of Child
            <br></br>
            <br></br>
            {props.state.count-1}
        </div>
    )

}
export default ChildComponent
import React from "react"

import "./TodoItem.css"
function TodoItem(props){
    // console.log(props)
    return(
        <div className="todoitem">
            <input type="checkbox" checked={props.completed} 
            onChange={() => props.handleClick(props.id)}></input>
            <h5 className={props.completed?"completedstyle":null}> {props.text}</h5>
        </div>
    )
}

export default TodoItem
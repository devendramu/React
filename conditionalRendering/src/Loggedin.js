import React from "react"

function Loggedin(props){
    // console.log(props)
    return(
        <div>
            <h1> user is logged {props.loginstate}</h1>
            <input type = "button" value = {props.btnval} onClick={props.handle}/>

        </div>
    )
}

export default Loggedin
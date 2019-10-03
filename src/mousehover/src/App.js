import React from "react"

function handleClick(){
  console.log("Mouse over me")
}
function App() {
    return (
        <div>
            <img src="https://www.fillmurray.com/200/100" onMouseOver={handleClick}/>
            <br />
            <br />
            <button>Click me</button>
        </div>
    )
}

export default App
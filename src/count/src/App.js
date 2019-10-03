import React from "react"
import ChildComponent from "./components/ChildComponent"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.clickHandle = this.clickHandle.bind(this)
    }
    
    
    clickHandle(){
      this.setState(prevState => {
        return {
          count: prevState.count +1
        }
      })

    }
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick = {this.clickHandle}>Change!</button>
                <br></br>
                <br></br>
                <br></br>
                <ChildComponent state = {this.state} />
            </div>
        )
    }
}

export default App

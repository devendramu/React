import React from "react"
import Loggedin from "./Loggedin"


import "./App.css"

class App extends React.Component {
  constructor() {
    super()
    this.state = { loggedin: false }

    this.clickHandle=this.clickHandle.bind(this)
  }
  clickHandle(){
    // console.log(this.state.loggedin)
    const newloggedin = !this.state.loggedin
    // console.log(newloggedin)
    this.setState(prevState => {
      return{
        loggedin :newloggedin
      }
    })
  }
  render() {
    const txtval = this.state.loggedin ? "in" :" out"
    const btnval = this.state.loggedin ? "LogOut" : "Login"
    return (
      <Loggedin loginstate={txtval} btnval ={btnval} handle={this.clickHandle}/>
    )
  }
}

export default App
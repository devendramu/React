import React from "react"

import "./App.css"

class App extends React.Component {
  constructor() {
    super()
  }
  componentDidMount(){
    fetch("https://swapi.co/api/people/1")
      .then(resp => resp.json()
      .then(dat => console.log(dat))
        )
  }
  render() {
    return (
      <div>App.js file</div>
    )
  }

}

export default App
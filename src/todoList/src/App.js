import React from "react"
import todos from "./todos"
import TodoItem from "./components/TodoItem"
import "./App.css"

// console.log(todos)
class App extends React.Component{

constructor(){
  super()
  this.state = {todos}
  this.handleClick = this.handleClick.bind(this)

}
  handleClick(id){

    const flag = todos[id-1].completed
    const updatedtodos = todos
    updatedtodos[id-1].completed = !flag

    this.setState(prevState => {
      return {
       todos:updatedtodos 
      }

    })
  }
  render(){
    const toDoItems = todos.map(items => <TodoItem key = {items.id} id={items.id} text={items.text} completed={items.completed} handleClick={this.handleClick}/>)
    return(
      <div className="todolist">
        {toDoItems}
      </div>
    )
  }
}
export default App
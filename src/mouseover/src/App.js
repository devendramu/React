import React from "react"
import productsData from "./vschoolProducts"
import Product from "./Product"
import "./App.css"

const productlist = productsData.map(prod => 
<Product key = {prod.id} name = {prod.name} price = {prod.price} description= {prod.description} />)


// console.log(productsData)
function App() {
  return (
    <div>
      App.js 

    </div>
  )
}

export default App
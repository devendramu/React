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
      Products
       {productlist}
        {/* <Product         
        id= "12"
        name= "Pencil" 
        price= "1"
        description= "Perfect for those who can't remember things! 5/5 Highly recommend." /> */}

    </div>
  )
}

export default App
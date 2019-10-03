import React from "react"
import "./Product.css"

function Product(props){
	console.log(props)
	return(
		<div className="productdetail">
		{/* id {props.id} <br></br> */}
		name: {props.name} <br></br>
        price: {props.price} <br></br>
        description : {props.description} <br></br>
		<br></br>
		</div>
		)
}

export default Product
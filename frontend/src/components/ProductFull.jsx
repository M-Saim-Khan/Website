import React from "react";
import { Link } from "react-router-dom"
import "../styles/Product.css"
function Product({product, onAdd}){
    return <div className="product-container">
        <h2 className="product-title">{product.title}</h2>
        <h3 className="product-price">${product.price}</h3>
        <p className="product-description">{product.description}</p>
        <p className="product-inventory">ONLY {product.inventory} LEFT! GET YOURS NOW!</p>
        <button className="add-to-cart" onClick={()=>onAdd(product.id)}>ADD TO CART!</button>
    </div>
}

export default Product
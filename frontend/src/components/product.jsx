import React from "react";
import { Link } from "react-router-dom"
import "../styles/Product.css"
function Product({product}){
    return <div className="product-container">
        <h2 className="product-title">{product.title}</h2>
        <h3 className="product-price">${product.price}</h3>
    </div>
}

export default Product
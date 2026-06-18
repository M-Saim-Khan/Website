import React from "react";
import { Link } from "react-router-dom"
import "../styles/CartItem.css"
function CartItem({Cartitem, onDelete}){
    if (!Cartitem || !Cartitem.product) return null

    return <div className="cartitem-container">
        <Link to={`/products/${Cartitem.product.id}`}>
            <p className="cartitem-title">{Cartitem.product.title}</p>
        </Link>
        <button className="delete-button" onClick={()=>onDelete(Cartitem.id)}>Delete</button>
    </div>
}

export default CartItem
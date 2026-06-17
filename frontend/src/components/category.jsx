import React from "react";
import { Link } from "react-router-dom"
import "../styles/Category.css"
function Category({category}){
    return <div className="category-container">
        <Link to ={`category/${category.id}`}>
            <p className="category-title">{category.title}</p>
        </Link>
    </div>
}

export default Category